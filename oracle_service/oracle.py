from flask import Flask, request, jsonify
import threading
import time
import json
import collections

app = Flask(__name__)

# In-memory data store for received agent data
# Stores the latest data from each agent, identified by a unique ID
# Example: { "agent_id_1": {"gpu_name": "...", "total_vram_mb": "..."}, "agent_id_2": {...} }
agent_data_store = {}

# Dictionary to track last seen timestamp for each agent to determine "active" agents
# Example: { "agent_id_1": timestamp, "agent_id_2": timestamp }
agent_last_seen = {}

# Configuration for agent activity timeout (in seconds)
# Agents are considered active if they've reported within this timeframe
AGENT_ACTIVITY_TIMEOUT = 300 # 5 minutes

# --- API Endpoints ---

@app.route('/submit_agent_data', methods=['POST'])
def submit_agent_data():
    """
    Receives data from an agent.
    Requires 'agent_id' and 'data' (JSON) in the request body.
    """
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    payload = request.get_json()
    agent_id = payload.get('agent_id')
    agent_data = payload.get('data')

    if not agent_id:
        return jsonify({"error": "Missing 'agent_id' in payload"}), 400
    if not agent_data:
        return jsonify({"error": "Missing 'data' in payload"}), 400

    # Store the latest data for this agent
    agent_data_store[agent_id] = agent_data
    # Update last seen timestamp
    agent_last_seen[agent_id] = time.time()

    print(f"Received data from Agent '{agent_id}': {json.dumps(agent_data, indent=2)}")
    return jsonify({"message": f"Data from agent {agent_id} received successfully"}), 200

@app.route('/oracle_status', methods=['GET'])
def oracle_status():
    """
    Provides current status of the Oracle, including aggregated data.
    """
    current_time = time.time()
    active_agents = 0
    inactive_agents = 0
    all_gpu_names = []
    total_vram_across_active_agents = 0

    for agent_id, last_seen_time in list(agent_last_seen.items()): # Use list() for safe iteration
        if (current_time - last_seen_time) <= AGENT_ACTIVITY_TIMEOUT:
            active_agents += 1
            # Aggregate GPU names and VRAM from active agents
            if agent_id in agent_data_store:
                agent_gpu_data = agent_data_store[agent_id]
                # Assuming agent_gpu_data is a list of GPU objects, as per our agent design
                if isinstance(agent_gpu_data, list):
                    for gpu in agent_gpu_data:
                        if 'gpu_name' in gpu:
                            all_gpu_names.append(gpu['gpu_name'])
                        if 'total_vram_mb' in gpu:
                            total_vram_across_active_agents += gpu['total_vram_mb']
        else:
            inactive_agents += 1
            # Optionally remove inactive agents' data to save memory
            # if agent_id in agent_data_store:
            #     del agent_data_store[agent_id]
            # del agent_last_seen[agent_id]


    # Count occurrences of each GPU name
    gpu_name_counts = collections.Counter(all_gpu_names)

    status = {
        "total_agents_known": len(agent_last_seen),
        "active_agents": active_agents,
        "inactive_agents": inactive_agents,
        "agent_activity_timeout_seconds": AGENT_ACTIVITY_TIMEOUT,
        "aggregated_gpu_info": {
            "gpu_model_counts": dict(gpu_name_counts),
            "total_vram_active_agents_mb": total_vram_across_active_agents
        },
        "latest_agent_data_snapshot": agent_data_store # For debugging/inspection
    }
    return jsonify(status), 200

# --- Background Task for Blockchain Preparation (Placeholder) ---

def prepare_data_for_blockchain():
    """
    This function simulates a background task that prepares data
    for eventual submission to a blockchain.
    In a real scenario, this would involve more complex logic,
    cryptographic signing, and interaction with a web3 library.
    """
    while True:
        current_time = time.time()
        active_agents_count = 0
        current_vram_total = 0
        gpu_model_summary = collections.Counter()

        # Re-evaluate active agents and aggregate data
        for agent_id, last_seen_time in list(agent_last_seen.items()):
            if (current_time - last_seen_time) <= AGENT_ACTIVITY_TIMEOUT:
                active_agents_count += 1
                if agent_id in agent_data_store:
                    agent_gpu_data = agent_data_store[agent_id]
                    if isinstance(agent_gpu_data, list):
                        for gpu in agent_gpu_data:
                            if 'gpu_name' in gpu:
                                gpu_model_summary[gpu['gpu_name']] += 1
                            if 'total_vram_mb' in gpu:
                                current_vram_total += gpu['total_vram_mb']
            else:
                # Agent is inactive, remove its data to prevent stale data being processed
                if agent_id in agent_data_store:
                    del agent_data_store[agent_id]
                del agent_last_seen[agent_id] # Clean up inactive agent from tracking

        # This is where you'd prepare your data for a blockchain transaction
        # For example, create a hash of the data, sign it, and queue it for submission.
        data_to_record_on_chain = {
            "timestamp": int(current_time),
            "active_agent_count": active_agents_count,
            "total_active_vram_mb": current_vram_total,
            "gpu_model_breakdown": dict(gpu_model_summary)
            # Add more data points as needed
        }

        print(f"\n[Oracle Background Task] Data prepared for blockchain (simulated):")
        print(json.dumps(data_to_record_on_chain, indent=2))
        # In a real scenario, you'd then interact with your blockchain here
        # E.g., web3.py calls, transaction signing, etc.

        # Sleep for a defined interval before preparing the next batch
        time.sleep(60) # Prepare data every 60 seconds (adjust as needed)

# --- Main execution ---
if __name__ == '__main__':
    print("Starting Oracle service...")
    # Start the background data preparation thread
    # Setting daemon=True allows the main program to exit even if this thread is still running
    blockchain_prep_thread = threading.Thread(target=prepare_data_for_blockchain, daemon=True)
    blockchain_prep_thread.start()

    # Run the Flask application
    app.run(host='0.0.0.0', port=5050, debug=False) # debug=True can be useful for development