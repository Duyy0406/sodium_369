"""
Test script for Oracle service components
This script tests all Oracle components before running the main service
"""

import sys
import os
import time
import json
from datetime import datetime

# Add oracle-service to path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'oracle_service'))

try:
    from src.config import config
    from src.oracle_client import OracleClient
    from src.utils import setup_logging, validate_gpu_data, format_timestamp
except ImportError as e:
    print(f"❌ Import error: {e}")
    print("Make sure you're running this from the project root directory")
    print("And that oracle_service files are properly created")
    sys.exit(1)

class TestResults:
    """Track test results"""
    def __init__(self):
        self.tests = []
        self.passed = 0
        self.failed = 0
    
    def add_test(self, name: str, success: bool, message: str = ""):
        self.tests.append({
            'name': name,
            'success': success,
            'message': message,
            'timestamp': datetime.now().strftime('%H:%M:%S')
        })
        if success:
            self.passed += 1
        else:
            self.failed += 1
    
    def print_summary(self):
        print("\n" + "="*60)
        print("🧪 TEST SUMMARY")
        print("="*60)
        
        for test in self.tests:
            status = "✅ PASS" if test['success'] else "❌ FAIL"
            print(f"{test['timestamp']} - {status} - {test['name']}")
            if test['message']:
                print(f"    📝 {test['message']}")
        
        print(f"\n📊 Results: {self.passed} passed, {self.failed} failed")
        
        if self.failed == 0:
            print("🎉 All tests passed! Oracle service is ready to run.")
        else:
            print("⚠️  Some tests failed. Check configuration and try again.")

def test_environment():
    """Test environment and configuration"""
    results = TestResults()
    
    print("🔧 Testing Environment & Configuration...")
    
    # Test .env file exists
    env_path = os.path.join(os.path.dirname(__file__), '..', 'oracle-service', '.env')
    if os.path.exists(env_path):
        results.add_test("Environment file exists", True, f"Found .env at {env_path}")
    else:
        results.add_test("Environment file exists", False, "No .env file found. Copy .env.example to .env")
        return results
    
    # Test configuration loading
    try:
        config_dict = config.to_dict()
        results.add_test("Configuration loading", True, f"Loaded {len(config_dict)} config values")
        
        # Test required fields
        required_fields = ['rpc_url', 'contract_address', 'account_address', 'agent_api_url']
        missing = [field for field in required_fields if not config_dict.get(field)]
        
        if missing:
            results.add_test("Required configuration", False, f"Missing: {missing}")
        else:
            results.add_test("Required configuration", True, "All required fields present")
            
    except Exception as e:
        results.add_test("Configuration loading", False, str(e))
    
    return results

def test_agent_connection():
    """Test connection to agent API"""
    results = TestResults()
    
    print("🔍 Testing Agent API Connection...")
    
    try:
        fetcher = DataFetcher()
        results.add_test("Data fetcher initialization", True, "DataFetcher created successfully")
        
        # Test basic connection
        print("  📡 Attempting to fetch data from agent...")
        data = fetcher.fetch_gpu_supply_data()
        
        if data:
            results.add_test("Agent API connection", True, f"Successfully fetched: {data}")
            
            # Test data validation
            if validate_gpu_data(data):
                results.add_test("Data validation", True, "Data format is valid")
            else:
                results.add_test("Data validation", False, "Data format is invalid")
        else:
            results.add_test("Agent API connection", False, "Failed to fetch data from agent")
        
        # Test retry mechanism
        print("  🔄 Testing retry mechanism...")
        retry_data = fetcher.fetch_with_retry()
        
        if retry_data:
            results.add_test("Retry mechanism", True, "Retry fetch successful")
        else:
            results.add_test("Retry mechanism", False, "Retry fetch failed")
            
    except Exception as e:
        results.add_test("Agent connection test", False, f"Exception: {str(e)}")
    
    return results

def test_blockchain_connection():
    """Test blockchain and smart contract connection"""
    results = TestResults()
    
    print("⛓️  Testing Blockchain Connection...")
    
    try:
        client = OracleClient()
        results.add_test("Oracle client initialization", True, "OracleClient created successfully")
        
        # Test blockchain connection
        if client.w3.is_connected():
            results.add_test("Blockchain connection", True, f"Connected to {client.w3.client_version}")
            
            # Test account balance
            balance = client.w3.eth.get_balance(config.account_address)
            balance_eth = client.w3.from_wei(balance, 'ether')
            
            if balance > 0:
                results.add_test("Account balance", True, f"Balance: {balance_eth:.6f} ETH")
            else:
                results.add_test("Account balance", False, "Account has zero balance")
            
            # Test gas price
            gas_price = client.w3.eth.gas_price
            gas_price_gwei = gas_price / 1e9
            results.add_test("Gas price check", True, f"Current gas price: {gas_price_gwei:.2f} Gwei")
            
        else:
            results.add_test("Blockchain connection", False, "Cannot connect to blockchain")
            return results
        
        # Test contract reading
        print("  📖 Testing contract read operations...")
        current_supply = client.get_current_supply()
        
        if current_supply is not None:
            results.add_test("Contract read", True, f"Current supply: {current_supply}")
        else:
            results.add_test("Contract read", False, "Cannot read from contract")
        
    except Exception as e:
        results.add_test("Blockchain connection test", False, f"Exception: {str(e)}")
    
    return results

def test_full_update_cycle():
    """Test complete update cycle (without actually updating contract)"""
    results = TestResults()
    
    print("🔄 Testing Full Update Cycle...")
    
    try:
        # Initialize components
        fetcher = DataFetcher()
        client = OracleClient()
        
        # Fetch data
        print("  📥 Fetching GPU data...")
        gpu_data = fetcher.fetch_with_retry()
        
        if not gpu_data:
            results.add_test("Full cycle test", False, "Could not fetch GPU data")
            return results
        
        # Validate data
        if not validate_gpu_data(gpu_data):
            results.add_test("Full cycle test", False, "Invalid GPU data format")
            return results
        
        results.add_test("Data fetch & validation", True, f"Valid data: {gpu_data}")
        
        # Test transaction building (without sending)
        print("  🔨 Testing transaction building...")
        try:
            nonce = client.w3.eth.get_transaction_count(config.account_address)
            
            transaction = client.contract.functions.updateGpuSupply(
                gpu_data['total_supply'],
                gpu_data['available_supply'],
                gpu_data['timestamp']
            ).build_transaction({
                'from': config.account_address,
                'gas': config.gas_limit,
                'gasPrice': client.w3.eth.gas_price,
                'nonce': nonce
            })
            
            results.add_test("Transaction building", True, f"Transaction built successfully, gas limit: {transaction['gas']}")
            
            # Estimate gas cost
            gas_cost_wei = transaction['gas'] * transaction['gasPrice']
            gas_cost_eth = gas_cost_wei / 1e18
            results.add_test("Gas estimation", True, f"Estimated cost: {gas_cost_eth:.6f} ETH")
            
        except Exception as e:
            results.add_test("Transaction building", False, f"Failed to build transaction: {str(e)}")
        
    except Exception as e:
        results.add_test("Full cycle test", False, f"Exception: {str(e)}")
    
    return results

def test_with_mock_update():
    """Ask user if they want to perform a real update test"""
    print("\n" + "="*60)
    print("🚨 OPTIONAL: Real Contract Update Test")
    print("="*60)
    print("This will actually update your smart contract (costs gas)")
    
    response = input("Do you want to perform a real contract update? (y/N): ").lower().strip()
    
    if response in ['y', 'yes']:
        print("🔥 Performing real contract update...")
        
        try:
            fetcher = DataFetcher()
            client = OracleClient()
            
            # Get current state
            current_supply = client.get_current_supply()
            print(f"📊 Current contract state: {current_supply}")
            
            # Fetch new data
            gpu_data = fetcher.fetch_with_retry()
            if not gpu_data:
                print("❌ Could not fetch data for update")
                return False
            
            print(f"📥 New data to update: {gpu_data}")
            
            # Confirm update
            confirm = input("Proceed with update? This will cost gas (y/N): ").lower().strip()
            if confirm not in ['y', 'yes']:
                print("⏸️  Update cancelled")
                return False
            
            # Perform update
            success = client.update_with_retry(gpu_data)
            
            if success:
                print("✅ Real update test successful!")
                
                # Show new state
                new_supply = client.get_current_supply()
                print(f"📊 New contract state: {new_supply}")
                return True
            else:
                print("❌ Real update test failed!")
                return False
                
        except Exception as e:
            print(f"💥 Real update test error: {e}")
            return False
    else:
        print("⏸️  Skipping real update test")
        return True

def main():
    """Main test function"""
    print("🚀 GPU Supply Oracle - Component Testing")
    print("="*60)
    print(f"📅 Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"📂 Working directory: {os.getcwd()}")
    
    # Setup logging for tests
    setup_logging()
    
    # Run all tests
    all_results = []
    
    # Test 1: Environment
    all_results.append(test_environment())
    
    # Test 2: Agent connection
    all_results.append(test_agent_connection())
    
    # Test 3: Blockchain connection
    all_results.append(test_blockchain_connection())
    
    # Test 4: Full cycle
    all_results.append(test_full_update_cycle())
    
    # Print all results
    total_passed = sum(r.passed for r in all_results)
    total_failed = sum(r.failed for r in all_results)
    
    print("\n" + "="*60)
    print("🧪 COMPLETE TEST RESULTS")
    print("="*60)
    
    for i, result in enumerate(all_results, 1):
        print(f"\n--- Test Group {i} ---")
        for test in result.tests:
            status = "✅ PASS" if test['success'] else "❌ FAIL"
            print(f"{status} {test['name']}")
            if test['message']:
                print(f"    📝 {test['message']}")
    
    print(f"\n📊 OVERALL: {total_passed} passed, {total_failed} failed")
    
    # Final recommendation
    if total_failed == 0:
        print("\n🎉 ALL TESTS PASSED!")
        print("✅ Your Oracle service is ready to run!")
        print("🚀 Start it with: python oracle-service/main.py")
        
        # Optional real update test
        test_with_mock_update()
        
    else:
        print(f"\n⚠️  {total_failed} TESTS FAILED")
        print("❌ Fix the issues above before running the Oracle service")
        
        # Common fixes
        print("\n🔧 Common fixes:")
        print("  1. Check your .env file configuration")
        print("  2. Make sure your agent API is running")
        print("  3. Verify your contract is deployed correctly")
        print("  4. Check your account has enough ETH for gas")
        
        return 1
    
    return 0

if __name__ == "__main__":
    try:
        exit_code = main()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print("\n\n⏸️  Tests interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n💥 Unexpected error during testing: {e}")
        sys.exit(1)