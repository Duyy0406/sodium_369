# oracle_service/src/config.py
import os
import logging
from dotenv import load_dotenv

# Construct the path to the .env file
dotenv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
load_dotenv(dotenv_path=dotenv_path)

class Config:
    def __init__(self):
        # Kurtosis network RPC URL - typically runs on localhost
        # Default Kurtosis Ethereum node usually runs on port 8545
        self.rpc_url = os.getenv("RPC_URL", "http://localhost:8545")
        
        # For Kurtosis, you might also need to handle different port mappings
        # Check your Kurtosis enclave status for the actual port
        self.kurtosis_enclave_name = os.getenv("KURTOSIS_ENCLAVE_NAME", "ethereum-testnet")
        
        # Smart Contract details
        # You'll need to redeploy your contract on the Kurtosis network
        self.contract_address = os.getenv("CONTRACT_ADDRESS", "0x0000000000000000000000000000000000000000")  # Update after deployment
        self.abi_path = os.getenv("ABI_PATH", "artifacts/contracts/Registry.json")

        # Oracle's Ethereum account details
        # For Kurtosis local development, you can use pre-funded accounts
        # Kurtosis often provides test accounts with ETH already funded
        self.account_address = os.getenv("ACCOUNT_ADDRESS", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")  # Common first test account
        self.private_key = os.getenv("PRIVATE_KEY", "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80")  # Corresponding private key
        
        # Network-specific settings for Kurtosis
        self.network_name = os.getenv("NETWORK_NAME", "kurtosis")
        self.chain_id = int(os.getenv("CHAIN_ID", 1337))  # Common local development chain ID
        
        # Oracle update interval (in seconds) - can be shorter for local development
        self.update_interval = int(os.getenv("UPDATE_INTERVAL", 60))  # 1 minute for faster testing
        
        # Transaction settings optimized for local network
        self.max_retries = int(os.getenv("MAX_RETRIES", 3))
        self.gas_limit = int(os.getenv("GAS_LIMIT", 500000))  # Higher limit for local testing
        
        # Gas price settings for local network (usually very low or zero)
        self.gas_price = int(os.getenv("GAS_PRICE", 1000000000))  # 1 Gwei, adjust as needed
        
        # Connection timeout settings for local network
        self.connection_timeout = int(os.getenv("CONNECTION_TIMEOUT", 30))
        self.transaction_timeout = int(os.getenv("TRANSACTION_TIMEOUT", 60))
        
        # Logging settings
        self.log_level = os.getenv("LOG_LEVEL", "DEBUG")  # More verbose logging for development
        self.log_file = os.getenv("LOG_FILE", "oracle_kurtosis.log")
        
        self.lease_time_seconds = int(os.getenv("LEASE_TIME_SECONDS", 120))  # Shorter lease time for testing
        
        # Development mode flag
        self.development_mode = os.getenv("DEVELOPMENT_MODE", "true").lower() == "true"

    def to_dict(self):
        """Converts config to a dictionary for logging/display, excluding sensitive info."""
        return {k: v for k, v in self.__dict__.items() if not k.startswith('_') and k not in ['private_key']}

    def get_kurtosis_rpc_url(self):
        """
        Helper method to dynamically get RPC URL from Kurtosis enclave.
        You might need to adjust this based on your Kurtosis setup.
        """
        try:
            import subprocess
            result = subprocess.run(
                ["kurtosis", "enclave", "inspect", self.kurtosis_enclave_name],
                capture_output=True,
                text=True,
                timeout=10
            )
            if result.returncode == 0:
                # Parse the output to find the RPC URL
                # This is a simplified example - you'll need to adjust based on actual output format
                lines = result.stdout.split('\n')
                for line in lines:
                    if 'rpc' in line.lower() and 'http' in line:
                        # Extract URL from the line - adjust parsing as needed
                        pass
        except Exception as e:
            logging.getLogger(__name__).warning(f"Could not get Kurtosis RPC URL dynamically: {e}")
        
        return self.rpc_url

config = Config()