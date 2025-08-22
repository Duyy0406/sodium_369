"""
Oracle client for interacting with the smart contract on Kurtosis network
"""
import json
import logging
import time
from web3 import Web3
from typing import Optional, Dict, Any
from .config import config

logger = logging.getLogger(__name__)

# Contract ABI - Same as before, matches your Registry.sol contract
CONTRACT_ABI = [
    {
        "inputs": [
            {"internalType": "address", "name": "_oracleAddress", "type": "address"}
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": False,
        "inputs": [
            {"indexed": False, "internalType": "uint256", "name": "oldSupply", "type": "uint256"},
            {"indexed": False, "internalType": "uint256", "name": "newSupply", "type": "uint256"},
            {"indexed": True, "internalType": "address", "name": "updater", "type": "address"}
        ],
        "name": "GpuSupplyUpdated",
        "type": "event"
    },
    {
        "anonymous": False,
        "inputs": [
            {"indexed": True, "internalType": "address", "name": "oldOracle", "type": "address"},
            {"indexed": True, "internalType": "address", "name": "newOracle", "type": "address"}
        ],
        "name": "OracleTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "oracleAddress",
        "outputs": [
            {"internalType": "address", "name": "", "type": "address"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalGpuSupply",
        "outputs": [
            {"internalType": "uint256", "name": "", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "_newSupply", "type": "uint256"}
        ],
        "name": "updateGpuSupply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "_newOracleAddress", "type": "address"}
        ],
        "name": "transferOracleRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

class OracleClient:
    """Client for interacting with the GPU Supply Oracle smart contract on Kurtosis network"""
    
    def __init__(self):
        # Try to get dynamic RPC URL if available
        rpc_url = config.get_kurtosis_rpc_url() if hasattr(config, 'get_kurtosis_rpc_url') else config.rpc_url
        
        # Initialize Web3 connection with timeout settings for local network
        self.w3 = Web3(Web3.HTTPProvider(
            rpc_url,
            request_kwargs={'timeout': config.connection_timeout}
        ))
        
        self.contract_address = Web3.to_checksum_address(config.contract_address)
        self.account_address = Web3.to_checksum_address(config.account_address)
        self.private_key = config.private_key
        
        # Initialize contract
        self.contract = self.w3.eth.contract(
            address=self.contract_address,
            abi=CONTRACT_ABI
        )
        
        self._validate_connection()
    
    def _validate_connection(self):
        """Validate blockchain connection and account for Kurtosis network"""
        try:
            if not self.w3.is_connected():
                logger.error("Failed to connect to Kurtosis network. Check RPC URL and ensure Kurtosis enclave is running.")
                raise ConnectionError("Failed to connect to Kurtosis network")
            
            # Get network info
            try:
                chain_id = self.w3.eth.chain_id
                block_number = self.w3.eth.block_number
                logger.info(f"Connected to Kurtosis network - Chain ID: {chain_id}, Latest block: {block_number}")
            except Exception as e:
                logger.warning(f"Could not get network info: {e}")
            
            logger.info(f"Account address: {self.account_address}")
            
            # Check account balance
            balance = self.w3.eth.get_balance(self.account_address)
            balance_eth = self.w3.from_wei(balance, 'ether')
            logger.info(f"Account balance: {balance_eth} ETH")
            
            if balance == 0:
                logger.warning("Account has zero balance. For Kurtosis, ensure you're using a pre-funded test account.")
                
            # Validate contract exists
            contract_code = self.w3.eth.get_code(self.contract_address)
            if contract_code == b'':
                logger.error(f"No contract found at address {self.contract_address}. Make sure the contract is deployed.")
                raise ConnectionError("Contract not found at specified address")
            else:
                logger.info("✅ Contract found at specified address")
                
        except Exception as e:
            logger.error(f"Connection validation failed: {e}")
            raise
    
    def get_current_supply(self) -> Optional[int]:
        """Get current GPU supply from contract using the totalGpuSupply getter."""
        try:
            current_supply = self.contract.functions.totalGpuSupply().call()
            logger.debug(f"Current supply on contract: {current_supply}")
            return current_supply
        except Exception as e:
            logger.error(f"Failed to get current supply from contract: {e}")
            return None
    
    def update_gpu_supply(self, new_supply_value: int) -> bool:
        """
        Update GPU supply on the smart contract by calling updateGpuSupply.
        Optimized for Kurtosis local network.
        
        Args:
            new_supply_value (int): The new total GPU supply value to set.
            
        Returns:
            True if successful, False otherwise
        """
        try:
            logger.info(f"Preparing to update contract with new supply: {new_supply_value}")
            
            # Get current nonce
            nonce = self.w3.eth.get_transaction_count(self.account_address)
            
            # For local networks, we can use a fixed gas price or get current price
            gas_price = getattr(config, 'gas_price', None)
            if gas_price is None:
                try:
                    gas_price = self.w3.eth.gas_price
                except:
                    gas_price = 1000000000  # 1 Gwei fallback
            
            # Build transaction
            transaction = self.contract.functions.updateGpuSupply(new_supply_value).build_transaction({
                'from': self.account_address,
                'gas': config.gas_limit,
                'gasPrice': gas_price,
                'nonce': nonce,
                'chainId': getattr(config, 'chain_id', None)  # Include chain ID if specified
            })
            
            logger.debug(f"Transaction details: gas={transaction['gas']}, gasPrice={transaction['gasPrice']}, nonce={transaction['nonce']}")
            
            # Sign transaction
            signed_txn = self.w3.eth.account.sign_transaction(
                transaction, 
                self.private_key
            )
            
            # Send transaction
            tx_hash = self.w3.eth.send_raw_transaction(signed_txn.raw_transaction)
            logger.info(f"Transaction sent: {tx_hash.hex()}")
            
            # Wait for confirmation with appropriate timeout for local network
            timeout = getattr(config, 'transaction_timeout', 60)
            receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash, timeout=timeout)
            
            if receipt.status == 1:
                logger.info(f"✅ Transaction confirmed: {receipt.transactionHash.hex()}")
                logger.info(f"Gas used: {receipt.gasUsed}/{config.gas_limit}")
                
                # Log gas efficiency
                gas_efficiency = (receipt.gasUsed / config.gas_limit) * 100
                logger.debug(f"Gas efficiency: {gas_efficiency:.1f}%")
                
                return True
            else:
                logger.error(f"❌ Transaction failed on-chain: {receipt.transactionHash.hex()}")
                logger.error(f"Receipt status: {receipt.status}")
                return False
                
        except Exception as e:
            logger.error(f"Error updating contract: {e}", exc_info=True)
            # For development, log more details
            if config.development_mode:
                logger.debug(f"Contract address: {self.contract_address}")
                logger.debug(f"Account address: {self.account_address}")
                try:
                    balance = self.w3.eth.get_balance(self.account_address)
                    logger.debug(f"Current balance: {self.w3.from_wei(balance, 'ether')} ETH")
                except:
                    pass
            return False
    
    def update_with_retry(self, new_supply_value: int) -> bool:
        """Update contract with retry mechanism, optimized for local development"""
        for attempt in range(config.max_retries):
            success = self.update_gpu_supply(new_supply_value)
            if success:
                return True
            
            if attempt < config.max_retries - 1:
                # Shorter wait times for local development
                wait_time = 2 * (attempt + 1)  # 2s, 4s, 6s...
                logger.warning(f"Update attempt {attempt + 1} failed, retrying in {wait_time}s")
                time.sleep(wait_time)
        
        logger.error(f"Failed to update contract after {config.max_retries} attempts.")
        return False
    
    def get_network_info(self) -> Dict[str, Any]:
        """Get network information for debugging"""
        try:
            return {
                'connected': self.w3.is_connected(),
                'chain_id': self.w3.eth.chain_id,
                'latest_block': self.w3.eth.block_number,
                'gas_price': self.w3.eth.gas_price,
                'account_balance': self.w3.from_wei(self.w3.eth.get_balance(self.account_address), 'ether'),
                'contract_exists': len(self.w3.eth.get_code(self.contract_address)) > 0
            }
        except Exception as e:
            logger.error(f"Error getting network info: {e}")
            return {'error': str(e)}