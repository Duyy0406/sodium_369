# GPU Supply Oracle Service

Automatically updates the smart contract with GPU supply data from the agent every 5 minutes.

## Setup
python3 -m venv venv

source venv/bin/activate
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
2. Copy and configure environment
   cp .env.example .env
   # Edit .env with your configuration
3. Run the service:
   python -m src.main