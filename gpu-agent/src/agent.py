import subprocess
import json
import requests
import sys
import uuid
import time
from datetime import datetime
from flask import Flask, jsonify
import threading

# IMPORTANT: If Oracle and Agent run on the SAME machine, Agent sends data directly to Oracle's local address.
# If Oracle is on localhost:8001, this should be:
API_ENDPOINT = "https://feb285e56d8d.ngrok-free.app/submit_agent_data" # <<<< UPDATED THIS ADDRESS
# If Agent is on a different machine and Oracle is exposed via ngrok, then this would be Oracle's ngrok URL.

AGENT_ID = str(uuid.uuid4())

# Flask app for Oracle integration
app = Flask(__name__)

class GPUAgent:
    def __init__(self):
        self.last_gpu_data = None
        self.last_update = None
        self.total_gpu_count = 0
        self.total_vram_gb = 0
        
    def get_gpu_info(self):
        """Function to retrieve basic GPU information using nvidia-smi."""
        try:
            result = subprocess.run(
                ["nvidia-smi", "--query-gpu=gpu_name,memory.total,memory.used,memory.free", 
                "--format=csv,noheader,nounits"],
                capture_output=True,
                text=True,
                check=True
            )
            output = result.stdout.strip()
            if not output:
                print("No GPU information found. Ensure NVIDIA GPU drivers are installed correctly.", file=sys.stderr)
                return None

            lines = output.split('\n')
            gpu_data = []
            total_vram = 0
            available_vram = 0
            
            for line in lines:
                parts = [part.strip() for part in line.split(',')]
                if len(parts) == 4:  # name, total, used, free
                    total_mem = int(parts[1])
                    used_mem = int(parts[2])
                    free_mem = int(parts[3])
                    
                    gpu_data.append({
                        "gpu_name": parts[0],
                        "total_vram_mb": total_mem,
                        "used_vram_mb": used_mem,
                        "free_vram_mb": free_mem,
                        "utilization_percent": (used_mem / total_mem) * 100 if total_mem > 0 else 0.0
                    })
                    
                    total_vram += total_mem
                    available_vram += free_mem
            
            # Only update last_gpu_data if we successfully collected data
            if gpu_data and total_vram > 0:
                # Calculate supply metrics for Oracle - ensure all fields are present
                self.last_gpu_data = {
                    "gpus": gpu_data,
                    "total_gpu_count": len(gpu_data),
                    "total_vram_gb": round(total_vram / 1024, 2),  # Convert MB to GB with precision
                    "available_vram_gb": round(available_vram / 1024, 2),
                    "utilization_percent": round(((total_vram - available_vram) / total_vram) * 100, 2) if total_vram > 0 else 0.0,
                    "timestamp": int(time.time()),
                    "last_updated": datetime.now().isoformat()
                }
                self.last_update = time.time()
                
                print(f"GPU data collected successfully: {len(gpu_data)} GPUs, {self.last_gpu_data['total_vram_gb']} GB total VRAM")
                return gpu_data
            else:
                print("No valid GPU data collected", file=sys.stderr)
                return None

        except FileNotFoundError:
            print("'nvidia-smi' command not found. Ensure NVIDIA drivers are installed and PATH is configured.", file=sys.stderr)
            return None
        except subprocess.CalledProcessError as e:
            print(f"Error executing nvidia-smi: {e}", file=sys.stderr)
            return None
        except ValueError as e:
            print(f"Error parsing GPU data: {e}", file=sys.stderr)
            return None
        except Exception as e:
            print(f"An unexpected error occurred: {e}", file=sys.stderr)
            return None

    def send_data_to_api(self):
        """Sends collected GPU data to the Oracle's API endpoint."""
        
        # Ensure we have fresh, complete data
        if not self.last_gpu_data:
            print("No GPU data available. Collecting fresh data...", file=sys.stderr)
            gpu_info = self.get_gpu_info()
            if not gpu_info or not self.last_gpu_data:
                print("Could not collect GPU data. Skipping send.", file=sys.stderr)
                return False
        
        # Validate that we have all required fields in last_gpu_data
        required_fields = ['gpus', 'total_gpu_count', 'total_vram_gb', 'available_vram_gb', 'utilization_percent', 'timestamp']
        missing_fields = [field for field in required_fields if field not in self.last_gpu_data]
        
        if missing_fields:
            print(f"Missing required fields in GPU data: {missing_fields}. Collecting fresh data...", file=sys.stderr)
            gpu_info = self.get_gpu_info()
            if not gpu_info or not self.last_gpu_data:
                print("Could not collect complete GPU data. Skipping send.", file=sys.stderr)
                return False
            
            # Check again after fresh collection
            missing_fields = [field for field in required_fields if field not in self.last_gpu_data]
            if missing_fields:
                print(f"Still missing required fields after fresh collection: {missing_fields}. Skipping send.", file=sys.stderr)
                return False
        
        if not self.last_gpu_data.get("gpus"):
            print("No GPU entries found in data. Skipping send.", file=sys.stderr)
            return False

        # Build payload with all required fields
        payload = {
            "agent_id": AGENT_ID,
            "data": self.last_gpu_data['gpus'],
            "total_gpu_count": self.last_gpu_data['total_gpu_count'],
            "total_vram_gb": self.last_gpu_data['total_vram_gb'],
            "available_vram_gb": self.last_gpu_data['available_vram_gb'],
            "utilization_percent": self.last_gpu_data['utilization_percent'],
            "timestamp": self.last_gpu_data['timestamp']
        }
        
        # Validate payload has all required fields
        payload_required_fields = ['agent_id', 'data', 'total_gpu_count', 'total_vram_gb', 'available_vram_gb', 'utilization_percent', 'timestamp']
        payload_missing_fields = [field for field in payload_required_fields if field not in payload or payload[field] is None]
        
        if payload_missing_fields:
            print(f"Payload missing required fields: {payload_missing_fields}. Skipping send.", file=sys.stderr)
            return False

        try:
            headers = {"Content-Type": "application/json"}
            print(f"Sending data from Agent {AGENT_ID} to API: {API_ENDPOINT}")
            print(f"Payload preview: agent_id={payload['agent_id']}, gpus={len(payload['data'])}, total_vram_gb={payload['total_vram_gb']}, available_vram_gb={payload['available_vram_gb']}")
            
            response = requests.post(API_ENDPOINT, data=json.dumps(payload), headers=headers, timeout=10)
            response.raise_for_status()
            
            print(f"Data from Agent {AGENT_ID} sent successfully. Status code: {response.status_code}")
            return True
            
        except requests.exceptions.Timeout:
            print("Request to send data to API timed out.", file=sys.stderr)
            return False
        except requests.exceptions.ConnectionError as e:
            print(f"Could not connect to API endpoint '{API_ENDPOINT}': {e}", file=sys.stderr)
            return False
        except requests.exceptions.RequestException as e:
            print(f"Error sending data to API: {e}", file=sys.stderr)
            # Print response content if available for debugging 400 errors
            if hasattr(e, 'response') and e.response is not None:
                print(f"Error response status: {e.response.status_code}", file=sys.stderr)
                print(f"Error response content: {e.response.text}", file=sys.stderr)
                print(f"Payload that caused error: {json.dumps(payload, indent=2)}", file=sys.stderr)
            return False
        except Exception as e:
            print(f"An unexpected error occurred while sending data: {e}", file=sys.stderr)
            return False

    def get_supply_data_for_oracle(self):
        """Converts GPU data to Oracle-compatible format (for GET endpoint)."""
        if not self.last_gpu_data:
            # Try to get fresh data if it's not already available
            self.get_gpu_info()
        
        if not self.last_gpu_data:
            return None
        
        # Calculate supply based on available VRAM
        # You can adjust this logic based on your requirements
        total_supply = int(self.last_gpu_data['total_vram_gb'])  # Total VRAM as supply metric
        available_supply = int(self.last_gpu_data['available_vram_gb'])  # Available VRAM
        
        return {
            'total_supply': total_supply,
            'available_supply': available_supply,
            'timestamp': self.last_gpu_data['timestamp'],
            'gpu_count': self.last_gpu_data['total_gpu_count'],
            'utilization_percent': self.last_gpu_data['utilization_percent'],
            'last_updated': self.last_gpu_data['last_updated'],
            'agent_id': AGENT_ID
        }

    def run_periodic_updates(self):
        """Runs your periodic data collection."""
        while True:
            print("Starting GPU information collection...")
            # Always call get_gpu_info to refresh self.last_gpu_data
            gpu_info = self.get_gpu_info() # This populates self.last_gpu_data

            if gpu_info: # Check if GPU info was successfully collected
                print("GPU information collected.")
                for gpu in gpu_info:
                    print(f"  GPU Name: {gpu.get('gpu_name', 'N/A')}")
                    print(f"  Total VRAM: {gpu.get('total_vram_mb', 'N/A')} MB")
                    print(f"  Used VRAM: {gpu.get('used_vram_mb', 'N/A')} MB")
                    print(f"  Free VRAM: {gpu.get('free_vram_mb', 'N/A')} MB")
                    print(f"  Utilization: {gpu.get('utilization_percent', 'N/A'):.1f}%")
                
                print("\nSending data to Oracle API...")
                # Call send_data_to_api without passing 'gpu_info' directly
                if self.send_data_to_api(): 
                    print("Data sent successfully.")
                else:
                    print("Failed to send data.")
            else:
                print("Could not collect GPU information. Skipping send.")
            
            # Wait 5 minutes before next collection
            print("Waiting 5 minutes for next update...\n")
            time.sleep(300)

# Initialize the agent
gpu_agent = GPUAgent()

# Flask API routes for Oracle integration
@app.route('/', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'GPU Supply Agent API',
        'agent_id': AGENT_ID,
        'timestamp': datetime.now().isoformat(),
        'last_data_update': gpu_agent.last_update
    })

@app.route('/gpu-supply', methods=['GET'])
def get_gpu_supply():
    """
    Main endpoint for Oracle service (for Oracle to PULL data).
    Returns current GPU supply data in Oracle-compatible format.
    """
    try:
        print("📊 Oracle requesting GPU supply data...")
        
        supply_data = gpu_agent.get_supply_data_for_oracle()
        
        if supply_data:
            print(f"✅ Returning supply data: {supply_data}")
            return jsonify(supply_data)
        else:
            print("❌ No GPU data available")
            return jsonify({
                'error': 'No GPU data available',
                'message': 'Agent has not collected GPU information yet'
            }), 503
        
    except Exception as e:
        print(f"❌ Error getting GPU supply for Oracle: {e}")
        return jsonify({
            'error': 'Failed to get GPU supply data',
            'message': str(e)
        }), 500

@app.route('/gpu-supply/detailed', methods=['GET'])
def get_detailed_gpu_supply():
    """Detailed GPU information endpoint"""
    try:
        if gpu_agent.last_gpu_data:
            return jsonify(gpu_agent.last_gpu_data)
        else:
            # Get fresh data
            gpu_info = gpu_agent.get_gpu_info()
            if gpu_info and gpu_agent.last_gpu_data:
                return jsonify(gpu_agent.last_gpu_data)
            else:
                return jsonify({
                    'error': 'No detailed GPU data available'
                }), 503
        
    except Exception as e:
        return jsonify({
            'error': 'Failed to get detailed GPU data',
            'message': str(e)
        }), 500

@app.route('/agent/status', methods=['GET'])
def get_agent_status():
    """Get agent system status"""
    return jsonify({
        'agent_id': AGENT_ID,
        'status': 'running',
        'last_gpu_check': gpu_agent.last_update,
        'gpu_count': gpu_agent.last_gpu_data['total_gpu_count'] if gpu_agent.last_gpu_data else 0,
        'uptime': time.time()
    })

def run_flask_server():
    """Runs the Flask API server"""
    print("🚀 Starting GPU Agent API Server for Oracle integration")
    print("📊 Available endpoints:")
    print("  GET  /                     - Health check")
    print("  GET  /gpu-supply           - GPU supply data (for Oracle)")
    print("  GET  /gpu-supply/detailed  - Detailed GPU information")
    print("  GET  /agent/status         - Agent status")
    print(f"\n🔗 Server running at: http://localhost:8001")
    print("🔄 Agent will collect GPU data every 5 minutes")
    print("⏹️  Press Ctrl+C to stop")
    
    app.run(
        host='0.0.0.0',
        port=8001,
        debug=False,
        threaded=True,
        use_reloader=False
    )

if __name__ == "__main__":
    print("🚀 Starting Enhanced GPU Agent with Oracle Integration")
    print(f"🆔 Agent ID: {AGENT_ID}")
    
    # Get initial GPU data
    print("📊 Collecting initial GPU information...")
    initial_data = gpu_agent.get_gpu_info() # This populates gpu_agent.last_gpu_data
    if initial_data:
        print("✅ Initial GPU data collected successfully")
    else:
        print("⚠️  Warning: Could not collect initial GPU data")
    
    # Start the periodic data collection in a separate thread
    update_thread = threading.Thread(target=gpu_agent.run_periodic_updates, daemon=True)
    update_thread.start()
    print("🔄 Started periodic GPU data collection thread")
    
    # Start the Flask API server (this will block)
    run_flask_server()
