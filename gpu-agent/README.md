# GPU Agent

## Overview
The GPU Agent is a simple Python application that retrieves basic GPU information from a machine using the `nvidia-smi` command and sends this data to a specified API endpoint. This project is designed to run on machines with NVIDIA GPUs.

## Project Structure
```
gpu-agent
├── src
│   ├── agent.py          # Main script for executing the agent functionality
│   └── utils
│       └── nvidia.py     # Utility functions for interacting with nvidia-smi
├── requirements.txt       # Python dependencies
└── README.md              # Project documentation
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd gpu-agent
   ```

2. **Install dependencies:**
   Make sure you have Python installed. Then, install the required packages using pip:
   ```
   pip install -r requirements.txt
   ```

3. **Ensure NVIDIA drivers are installed:**
   The `nvidia-smi` command requires NVIDIA drivers to be installed on your machine. Verify that the command works by running:
   ```
   nvidia-smi
   ```

## Usage
To run the GPU agent, execute the following command:
```
python src/agent.py
```

The agent will retrieve GPU information and send it to the specified API endpoint.

## API Endpoint
Make sure to configure the API endpoint in the `agent.py` file before running the agent. The endpoint should be capable of receiving the GPU information in the expected format.

## License
This project is licensed under the MIT License. See the LICENSE file for details.