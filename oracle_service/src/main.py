import signal
import sys
import os
import time
import logging
import threading
from datetime import datetime, timedelta # Import timedelta for time calculations
from flask import Flask, request, jsonify

# Assuming config, oracle_client, and utils are in the same src directory
from .config import config
from .oracle_client import OracleClient

# --- Flask App Setup ---
app = Flask(__name__)

# This dictionary will store the latest data received from each agent
# In a real-world scenario, you might aggregate data from multiple agents
# or use a more robust storage solution (e.g., a database).
received_agent_data = {} 
data_lock = threading.Lock() # Lock for thread-safe access to received_agent_data

shutdown_event = threading.Event()

def signal_handler(signum, frame):
    logger.info("Shutdown signal received. Shutting down gracefully...")
    shutdown_event.set()
    sys.exit(0)

# --- Logging Setup ---
def setup_logging():
    logging.basicConfig(
        level=getattr(logging, config.log_level.upper(), logging.INFO),
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(config.log_file),
            logging.StreamHandler(sys.stdout)
        ]
    )

    for noisy in ["web3", "urllib3", "werkzeug"]:
        logging.getLogger(noisy).setLevel(logging.WARNING)


setup_logging()
logger = logging.getLogger(__name__)

# Global OracleClient instance
oracle_client = None

# --- Oracle API Endpoints (Receiving data from Agents) ---
@app.route('/submit_agent_data', methods=['POST'])
def receive_agent_data():
    """
    Receives GPU data pushed by the Agent.
    This is the endpoint your Agent's API_ENDPOINT should point to.
    """
    try:
        data = request.get_json() 

        if not data:
            logger.warning("Received empty or non-JSON data from Agent.")
            return jsonify({"status": "error", "message": "No JSON data provided"}), 400

        agent_id = data.get('agent_id')
        gpu_info_list = data.get('data') 
        total_gpu_count = data.get('total_gpu_count')
        total_vram_gb = data.get('total_vram_gb')
        available_vram_gb = data.get('available_vram_gb')
        utilization_percent = data.get('utilization_percent')
        timestamp = data.get('timestamp')

        if not all([agent_id, gpu_info_list, total_gpu_count, total_vram_gb, available_vram_gb, timestamp]):
            logger.warning(f"Missing required data fields from Agent {agent_id}: {data}")
            return jsonify({"status": "error", "message": "Missing required data fields"}), 400

        # Store the latest data from this agent
        with data_lock:  # Ensure thread-safe access to shared data
            received_agent_data[agent_id] = {
                "gpu_info_list": gpu_info_list,
                "total_gpu_count": total_gpu_count,
                "total_vram_gb": total_vram_gb,
                "available_vram_gb": available_vram_gb,
                "utilization_percent": utilization_percent,
                "timestamp": timestamp,
                "received_at": datetime.now() # Store as datetime object for easy comparison
            }   
        logger.info(f"Received data from Agent {agent_id}: Total GPUs={total_gpu_count}, Total VRAM={total_vram_gb:.2f} GB, Available VRAM={available_vram_gb:.2f} GB")

        return jsonify({"status": "success", "message": "Data received and processed"}), 200

    except Exception as e:
        logger.error(f"Error receiving data from Agent: {e}", exc_info=True)
        return jsonify({"status": "error", "message": str(e)}), 500

# Optional: Endpoint to check what data the Oracle has received
@app.route('/oracle/received_data', methods=['GET'])
def get_received_data():
    """Returns the currently stored agent data."""
    # Convert datetime objects to string for JSON serialization
    serializable_data = {
        agent_id: {k: v.isoformat() if isinstance(v, datetime) else v for k, v in data.items()}
        for agent_id, data in received_agent_data.items()
    }
    return jsonify(serializable_data), 200

# New endpoint for Kurtosis development - network info
@app.route('/oracle/network_info', methods=['GET'])
def get_network_info():
    """Returns network information for debugging in Kurtosis environment."""
    if oracle_client and hasattr(oracle_client, 'get_network_info'):
        network_info = oracle_client.get_network_info()
        return jsonify(network_info), 200
    else:
        return jsonify({"error": "OracleClient not initialized or method not available"}), 500

def get_aggregated_supply() -> int:
    """
    Filters out stale agents, updates the global data dictionary,
    and returns the new total supply. This function is thread-safe.
    """
    logger.info("⚙️ Filtering stale agent data and aggregating supply...")
    
    # Use a lock to ensure no other thread can modify the dictionary while we're working
    with data_lock:
        current_time = datetime.now()
        active_agents = {}
        
        # First pass: Identify and collect all active agents
        for agent_id, data in received_agent_data.items():
            if (current_time - data['received_at']) < timedelta(seconds=config.lease_time_seconds):
                active_agents[agent_id] = data
            else:
                logger.info(f"Agent {agent_id} data is stale (last seen {data['received_at'].isoformat()}).")

        # Second pass: Safely remove stale agents from the global dictionary
        # by replacing it with our new, clean dictionary of active agents.
        received_agent_data.clear()
        received_agent_data.update(active_agents)

        logger.info(f"✅ {len(received_agent_data)} agents are currently active.")
        
        # Calculate the total VRAM from the newly cleaned dictionary
        total_vram = sum(data.get('total_vram_gb', 0) for data in received_agent_data.values())
        
        return int(total_vram)

def oracle_update_cycle():
    """
    This function runs periodically to update the smart contract.
    It aggregates data from all *active* agents and pushes to the blockchain.
    """
    logger.info("🎯 Running Oracle update cycle...")

    # Get the aggregated supply and clean up stale agents in a single, thread-safe step
    new_supply_value = get_aggregated_supply()

    if not received_agent_data:
        logger.warning("⚠️ No active agent data received yet. Skipping contract update.")
        # Optionally, you could send a 0 value to the contract if you want to reflect zero supply
        # oracle_client.update_gpu_supply(0) 
    
    else:
        total_gpu_count_across_active_agents = sum(data.get('total_gpu_count', 0) for data in received_agent_data.values())
        logger.info(f"Aggregated data: Total VRAM across active agents={new_supply_value} GB. Total GPUs={total_gpu_count_across_active_agents}.")

    if oracle_client:
        try:
            current_contract_supply = oracle_client.get_current_supply()
            
            logger.info(f"Comparing current contract supply ({current_contract_supply}) with proposed new supply ({new_supply_value}).")
            if current_contract_supply == new_supply_value:
                logger.info(f"Current contract supply is already up-to-date. Skipping transaction.")
            else:
                logger.info(f"Updating contract with new supply: {new_supply_value}...")
                success = oracle_client.update_gpu_supply(new_supply_value) 
                if success:
                    logger.info("✅ Smart contract updated successfully.")
                else:
                    logger.error("❌ Failed to update smart contract.")
        except Exception as e:
            logger.error(f"Error during contract update cycle: {e}", exc_info=True)
    else:
        logger.error("OracleClient is not initialized. Cannot update contract.")


def start_scheduler_thread():
    """Starts the periodic update scheduler in a loop."""
    while not shutdown_event.is_set():
        oracle_update_cycle()
        logger.info(f"⏱️ Waiting {config.update_interval} seconds for next update cycle...")
        
        # Use shorter sleep intervals to allow for graceful shutdown
        for _ in range(config.update_interval):
            if shutdown_event.is_set():
                break
            time.sleep(1)

# --- Main execution block ---
def main():
    logger.info("🚀 Starting GPU Supply Oracle Service for Kurtosis Network")
    logger.info(f"⚙️ Configuration: {config.to_dict()}")

    # Set up signal handlers for graceful shutdown
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    try:
        # Initialize OracleClient
        global oracle_client
        logger.info("🔧 Initializing Oracle components...")
        oracle_client = OracleClient() 
        logger.info("✅ OracleClient initialized successfully.")

        # Test contract connection
        logger.info("🧪 Testing initial connections...")
        current_supply = oracle_client.get_current_supply()
        if current_supply is not None: 
            logger.info(f"✅ Contract connection successful. Current supply: {current_supply}")
        else:
            logger.warning("⚠️ Could not read from contract, but continuing...")

        # Log network information for Kurtosis debugging
        if hasattr(oracle_client, 'get_network_info'):
            network_info = oracle_client.get_network_info()
            logger.info(f"🌐 Network info: {network_info}")

        # Start the Flask API server in a separate thread
        api_thread = threading.Thread(target=lambda: app.run(host='0.0.0.0', port=8001, debug=False, use_reloader=False), daemon=True)
        api_thread.start()
        logger.info("🌐 Oracle API server started on port 8001.")

        # Start the scheduler in another separate thread
        scheduler_thread = threading.Thread(target=start_scheduler_thread, daemon=True)
        scheduler_thread.start()
        logger.info(f"🗓️ Oracle scheduler started (interval: {config.update_interval}s).")

        logger.info(f"📊 Oracle service is now running on Kurtosis network!")
        logger.info(f"📝 Logs: {config.log_file}")
        logger.info("Press Ctrl+C to stop the service")

        # Keep the main thread alive so daemon threads continue running
        while not shutdown_event.is_set():
            time.sleep(1)
        
        logger.info("All threads have stopped. Exiting.")

    except ConnectionError as e:
        logger.critical(f"❌ Fatal connection error: {e}. Exiting.")
        logger.critical("💡 Make sure Kurtosis enclave is running and RPC_URL is correct.")
        sys.exit(1)
    except FileNotFoundError as e:
        logger.critical(f"❌ Fatal file error: {e}. Exiting.")
        logger.critical("💡 Check ABI_PATH and ensure contract artifacts exist.")
        sys.exit(1)
    except Exception as e:
        logger.critical(f"💥 Fatal unexpected error: {e}", exc_info=True)
        sys.exit(1)

if __name__ == "__main__":
    main()