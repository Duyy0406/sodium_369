// apps/block_scout_web/assets/js/lib/web3_service.js
// Web3 connection and management service

import Web3 from 'web3'

class Web3Service {
  constructor() {
    this.web3 = null
    this.isConnected = false
    this.networkId = null
    this.networkName = null
    this.blockNumber = null
    this.connectionAttempts = 0
    this.maxConnectionAttempts = 3
  }

  /**
   * Initialize Web3 connection
   * @param {string} rpcEndpoint - RPC endpoint URL
   * @returns {Promise<boolean>} - Success status
   */
  async initialize(rpcEndpoint) {
    console.log('Initializing Web3 service...')
    
    if (!rpcEndpoint) {
      throw new Error('RPC endpoint is required')
    }

    try {
      // Create Web3 instance
      this.web3 = new Web3(rpcEndpoint)
      
      // Test connection
      await this.testConnection()
      
      // Get network information
      await this.getNetworkInfo()
      
      this.isConnected = true
      this.connectionAttempts = 0
      
      console.log(`Connected to ${this.networkName} (ID: ${this.networkId})`)
      return true

    } catch (error) {
      this.connectionAttempts++
      console.error(`Web3 connection failed (attempt ${this.connectionAttempts}):`, error)
      
      if (this.connectionAttempts < this.maxConnectionAttempts) {
      console.log('Retrying connection with exponential backoff...')
      // Use exponential backoff here
      const delay = Math.pow(2, this.connectionAttempts) * 1000;
      await this.delay(delay); 
      return await this.initialize(rpcEndpoint);
    }
      
      this.isConnected = false
      throw new Error(`Failed to connect to Web3 after ${this.maxConnectionAttempts} attempts`)
    }
  }

  /**
   * Test Web3 connection by getting chain ID
   */
  async testConnection() {
    if (!this.web3) {
      throw new Error('Web3 not initialized')
    }

    // Try to get chain ID - this will fail if connection is bad
    await this.web3.eth.getChainId()
  }

  /**
   * Get network information
   */
  async getNetworkInfo() {
    if (!this.web3) {
      throw new Error('Web3 not initialized')
    }

    try {
      // Get network ID and latest block
      const [chainId, blockNumber] = await Promise.all([
        this.web3.eth.getChainId(),
        this.web3.eth.getBlockNumber()
      ])

      this.networkId = chainId
      this.blockNumber = blockNumber
      this.networkName = this.getNetworkName(chainId)

    } catch (error) {
      console.error('Failed to get network info:', error)
      throw error
    }
  }

  /**
   * Get human-readable network name
   * @param {number} chainId - Chain ID
   * @returns {string} - Network name
   */
  getNetworkName(chainId) {
    const networkNames = {
      1: 'Ethereum Mainnet',
      3: 'Ropsten Testnet',
      4: 'Rinkeby Testnet',
      5: 'Goerli Testnet',
      31337: 'Sodium Local',
      1337: 'Sodium Testnet',
      2024: 'Sodium Mainnet',

      3151908: 'Kurtosis Testnet'
    }

    return networkNames[chainId] || `Unknown Network (${chainId})`
  }

  /**
   * Get current block number
   * @returns {Promise<number>} - Current block number
   */
  async getCurrentBlockNumber() {
    if (!this.web3 || !this.isConnected) {
      throw new Error('Web3 not connected')
    }

    try {
      this.blockNumber = await this.web3.eth.getBlockNumber()
      return this.blockNumber
    } catch (error) {
      console.error('Failed to get block number:', error)
      // Don't throw here, just return cached value
      return this.blockNumber
    }
  }

  /**
   * Get network gas price
   * @returns {Promise<string>} - Gas price in wei
   */
  async getGasPrice() {
    if (!this.web3 || !this.isConnected) {
      throw new Error('Web3 not connected')
    }

    return await this.web3.eth.getGasPrice()
  }

  /**
   * Create contract instance
   * @param {Array} abi - Contract ABI
   * @param {string} address - Contract address
   * @returns {Object} - Contract instance
   */
  createContract(abi, address) {
    if (!this.web3 || !this.isConnected) {
      throw new Error('Web3 not connected')
    }

    if (!abi || !address) {
      throw new Error('ABI and address are required')
    }

    try {
      return new this.web3.eth.Contract(abi, address)
    } catch (error) {
      console.error('Failed to create contract instance:', error)
      throw error
    }
  }

  /**
   * Check if address is valid
   * @param {string} address - Ethereum address
   * @returns {boolean} - Is valid address
   */
  isValidAddress(address) {
    if (!this.web3) {
      return false
    }
    
    return this.web3.utils.isAddress(address)
  }

  /**
   * Convert wei to ether
   * @param {string|number} wei - Amount in wei
   * @returns {string} - Amount in ether
   */
  weiToEther(wei) {
    if (!this.web3) {
      throw new Error('Web3 not initialized')
    }
    
    return this.web3.utils.fromWei(wei.toString(), 'ether')
  }

  /**
   * Convert ether to wei
   * @param {string|number} ether - Amount in ether
   * @returns {string} - Amount in wei
   */
  etherToWei(ether) {
    if (!this.web3) {
      throw new Error('Web3 not initialized')
    }
    
    return this.web3.utils.toWei(ether.toString(), 'ether')
  }

  /**
   * Check connection status
   * @returns {Promise<boolean>} - Connection status
   */
  async checkConnection() {
    if (!this.web3) {
      this.isConnected = false
      return false
    }

    try {
      // Try to get latest block number as connection test
      await this.web3.eth.getBlockNumber()
      this.isConnected = true
      return true
    } catch (error) {
      console.error('Connection check failed:', error)
      this.isConnected = false
      return false
    }
  }

  /**
   * Reconnect to Web3
   * @param {string} rpcEndpoint - RPC endpoint URL
   * @returns {Promise<boolean>} - Success status
   */
  async reconnect(rpcEndpoint) {
    console.log('Attempting to reconnect...')
    this.connectionAttempts = 0
    return await this.initialize(rpcEndpoint)
  }

  /**
   * Get connection info
   * @returns {Object} - Connection information
   */
  getConnectionInfo() {
    return {
      isConnected: this.isConnected,
      networkId: this.networkId,
      networkName: this.networkName,
      blockNumber: this.blockNumber,
      web3Version: this.web3 ? this.web3.version : null
    }
  }

  /**
   * Utility function to delay execution
   * @param {number} ms - Milliseconds to delay
   * @returns {Promise} - Promise that resolves after delay
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * Cleanup Web3 instance
   */
  disconnect() {
    if (this.web3 && this.web3.currentProvider && this.web3.currentProvider.disconnect) {
      this.web3.currentProvider.disconnect()
    }
    
    this.web3 = null
    this.isConnected = false
    this.networkId = null
    this.networkName = null
    this.blockNumber = null
    
    console.log('Web3 service disconnected')
  }
}

// Create singleton instance
const web3Service = new Web3Service()

export { web3Service }