// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Network-specific default oracle addresses
const NETWORK_DEFAULTS = {
  // Local development (Hardhat)
  hardhat: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // Hardhat's default account[0]
  localhost: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // Same for localhost
  
  // Testnets (replace with your actual oracle addresses)
  sepolia: "0x0000000000000000000000000000000000000000", // Replace with actual
  goerli: "0x0000000000000000000000000000000000000000",  // Replace with actual
  
  // Mainnets (replace with your actual oracle addresses)
  mainnet: "0x0000000000000000000000000000000000000000", // Replace with actual
  polygon: "0x0000000000000000000000000000000000000000", // Replace with actual
};

module.exports = buildModule("RegistryModule", (m) => {
  // Get network name for environment-specific defaults
  const networkName = m.getParameter("networkName", "hardhat");
  
  // Get the oracle address as a parameter with network-specific fallback
  const defaultOracleAddress = NETWORK_DEFAULTS[networkName] || NETWORK_DEFAULTS.hardhat;
  const oracleAddress = m.getParameter("oracleAddress", defaultOracleAddress);
  
  // Early validation before deployment
  if (!oracleAddress || oracleAddress === "0x0000000000000000000000000000000000000000") {
    throw new Error(`Invalid oracle address for network '${networkName}'. Please provide a valid oracle address.`);
  }
  
  // Deploy the Registry contract with the oracle address
  const registry = m.contract("Registry", [oracleAddress], {
    // Optional: Add deployment metadata
    id: "Registry_v1", // Unique identifier for this deployment
  });
  
  // Optional: Log deployment info (will show during deployment)
  console.log(`Deploying Registry with oracle: ${oracleAddress} on network: ${networkName}`);
  
  // Validation during deployment
  if (!oracleAddress || oracleAddress === "0x0000000000000000000000000000000000000000") {
    throw new Error(`Invalid oracle address: ${oracleAddress}`);
  }
  
  // Return the deployed contract instance and metadata
  return { 
    registry,
    deploymentInfo: {
      oracleAddress,
      networkName,
      contractName: "Registry"
    }
  };
});

// Export additional helper for programmatic access
module.exports.getDefaultOracleForNetwork = (network) => {
  return NETWORK_DEFAULTS[network] || NETWORK_DEFAULTS.hardhat;
};