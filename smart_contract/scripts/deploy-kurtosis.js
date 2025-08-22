// scripts/deploy-kurtosis.js - This will work for your Kurtosis testnet
const hre = require("hardhat");

async function main() {
  console.log("🚀 Starting Registry deployment to Kurtosis...");
  console.log(`📡 Network: ${hre.network.name}`);
  
  // Get deployer
  const [deployer] = await hre.ethers.getSigners();
  console.log("👤 Deploying from:", deployer.address);
  
  // Check balance
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Balance:", hre.ethers.formatEther(balance), "ETH");
  
  // On a local testnet, this check is less critical as gas is typically free
  if (balance < hre.ethers.parseEther("0.001")) {
    console.warn("⚠️  Low balance! Deployment might fail if gas costs are high.");
  }
  
  // Set oracle address (use environment variable or deployer)
  // Changed SEPOLIA_ORACLE_ADDRESS to ORACLE_ADDRESS for a more generic name
  const oracleAddress = process.env.ORACLE_ADDRESS || deployer.address;
  console.log("🔮 Oracle address:", oracleAddress);
  
  if (oracleAddress === deployer.address) {
    console.log("ℹ️  Using deployer as oracle");
  }
  
  try {
    // Deploy contract directly (no Ignition)
    console.log("📦 Deploying Registry contract...");
    const Registry = await hre.ethers.getContractFactory("Registry");
    
    // Estimate gas first
    const deployTx = await Registry.getDeployTransaction(oracleAddress);
    const gasEstimate = await deployer.estimateGas(deployTx);
    console.log("⛽ Estimated gas:", gasEstimate.toString());
    
    // Deploy with estimated gas
    const registry = await Registry.deploy(oracleAddress, {
      gasLimit: gasEstimate + BigInt(50000) // Add buffer
    });
    
    console.log("📋 Deployment transaction sent!");
    console.log("🔗 Transaction hash:", registry.deploymentTransaction().hash);
    
    console.log("⏳ Waiting for deployment confirmation...");
    await registry.waitForDeployment();
    
    const contractAddress = await registry.getAddress();
    console.log("✅ Registry deployed successfully!");
    console.log("📄 Contract Address:", contractAddress);
    
    // Verify the deployment
    console.log("\n🔍 Verifying deployment...");
    const deployedOracle = await registry.oracleAddress();
    const initialSupply = await registry.totalGpuSupply();
    
    console.log("🔮 Oracle address:", deployedOracle);
    console.log("📊 Initial GPU Supply:", initialSupply.toString());
    
    // Get deployment receipt for more info
    const receipt = await registry.deploymentTransaction().wait();
    console.log("⛽ Gas used:", receipt.gasUsed.toString());
    console.log("📦 Block number:", receipt.blockNumber);
    
    // Final summary
    console.log("\n🎉 Deployment Summary:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📄 Contract Address:", contractAddress);
    console.log("🔮 Oracle Address:", deployedOracle);
    console.log("🔗 Transaction Hash:", receipt.hash);
    console.log("📦 Block Number:", receipt.blockNumber);
    console.log("⛽ Gas Used:", receipt.gasUsed.toString());
    // Note: On local testnets, gasPrice is often 0 or very small
    console.log("💰 Gas Cost:", hre.ethers.formatEther(receipt.gasUsed * receipt.gasPrice), "ETH");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    // Etherscan links and verification command are removed as they are not applicable to a local testnet.
    
    return {
      contractAddress,
      oracleAddress: deployedOracle,
      transactionHash: receipt.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString()
    };
    
  } catch (error) {
    console.error("\n❌ Deployment failed:", error.message);
    
    // Provide specific help for a local testnet
    if (error.message.includes("insufficient funds")) {
      console.log("\n💡 Solution: Ensure your account in .env has a balance. The Kurtosis output shows funded accounts.");
    } else if (error.message.includes("gas")) {
      console.log("\n💡 Solution: Try increasing the gas limit in the deploy options, or check your local node logs.");
    } else if (error.message.includes("nonce")) {
      console.log("\n💡 Solution: Your transaction nonce may be out of sync. Try resetting your local network or waiting a moment.");
    }
    
    throw error;
  }
}

// Execute deployment
main()
  .then((result) => {
    console.log("\n🎊 Deployment completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Deployment failed!");
    console.error("Error details:", error);
    process.exit(1);
  });