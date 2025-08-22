// scripts/deploy-sepolia-working.js - This will definitely work
const hre = require("hardhat");

async function main() {
  console.log("🚀 Starting Registry deployment to Sepolia...");
  console.log(`📡 Network: ${hre.network.name}`);
  
  // Get deployer
  const [deployer] = await hre.ethers.getSigners();
  console.log("👤 Deploying from:", deployer.address);
  
  // Check balance
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Balance:", hre.ethers.formatEther(balance), "ETH");
  
  if (balance < hre.ethers.parseEther("0.01")) {
    console.warn("⚠️  Low balance! You might need more ETH for deployment.");
  }
  
  // Set oracle address (use environment variable or deployer)
  const oracleAddress = process.env.SEPOLIA_ORACLE_ADDRESS || deployer.address;
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
    console.log("💰 Gas Cost:", hre.ethers.formatEther(receipt.gasUsed * receipt.gasPrice), "ETH");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    // Links
    console.log("\n🔗 Useful Links:");
    console.log("🔍 Contract on Etherscan:", `https://sepolia.etherscan.io/address/${contractAddress}`);
    console.log("🔍 Transaction on Etherscan:", `https://sepolia.etherscan.io/tx/${receipt.hash}`);
    
    // Verification command
    console.log("\n📋 To verify contract on Etherscan:");
    console.log(`npx hardhat verify --network sepolia ${contractAddress} "${oracleAddress}"`);
    
    return {
      contractAddress,
      oracleAddress: deployedOracle,
      transactionHash: receipt.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString()
    };
    
  } catch (error) {
    console.error("\n❌ Deployment failed:", error.message);
    
    // Provide specific help
    if (error.message.includes("insufficient funds")) {
      console.log("\n💡 Solution: Get more Sepolia ETH from faucets:");
      console.log("🚰 https://sepoliafaucet.com/");
      console.log("🚰 https://www.alchemy.com/faucets/ethereum-sepolia");
    } else if (error.message.includes("gas")) {
      console.log("\n💡 Solution: Try increasing gas limit or gas price");
    } else if (error.message.includes("nonce")) {
      console.log("\n💡 Solution: Wait a moment and try again, or reset nonce");
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