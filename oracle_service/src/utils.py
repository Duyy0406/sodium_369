"""
Utility functions for the Oracle service
"""
import logging
import sys
from datetime import datetime
from .config import config

def setup_logging():
    """Set up logging configuration"""
    log_format = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    
    # Configure root logger
    logging.basicConfig(
        level=getattr(logging, config.log_level.upper()),
        format=log_format,
        handlers=[
            logging.FileHandler(config.log_file),
            logging.StreamHandler(sys.stdout)
        ]
    )
    
    # Set web3 logging to WARNING to reduce noise
    logging.getLogger('web3').setLevel(logging.WARNING)
    logging.getLogger('urllib3').setLevel(logging.WARNING)

def format_timestamp(timestamp: int) -> str:
    """Format timestamp for display"""
    return datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')

def validate_gpu_data(data: dict) -> bool:
    """Validate GPU supply data structure"""
    required_keys = ['total_supply', 'available_supply', 'timestamp']
    
    if not all(key in data for key in required_keys):
        return False
    
    if not all(isinstance(data[key], int) for key in required_keys):
        return False
    
    if data['total_supply'] < 0 or data['available_supply'] < 0:
        return False
    
    if data['available_supply'] > data['total_supply']:
        return False
    
    return True

def format_gas_price(gas_price_wei: int) -> str:
    """Format gas price for display"""
    gas_price_gwei = gas_price_wei / 1e9
    return f"{gas_price_gwei:.2f} Gwei"

def calculate_transaction_cost(gas_used: int, gas_price_wei: int) -> str:
    """Calculate and format transaction cost"""
    cost_wei = gas_used * gas_price_wei
    cost_eth = cost_wei / 1e18
    return f"{cost_eth:.6f} ETH"