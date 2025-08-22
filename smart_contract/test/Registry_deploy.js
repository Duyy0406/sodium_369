const { expect } = require("chai");
const hre = require("hardhat");

describe("Registry Deployment - Alternative Approach", function () {
    let deployer, addr1, addr2;
    let Registry;

    before(async function () {
        console.log("🔧 Setting up deployment tests...");
        [deployer, addr1, addr2] = await hre.ethers.getSigners();
        Registry = await hre.ethers.getContractFactory("Registry");
        
        console.log(`👤 Deployer: ${deployer.address}`);
        console.log(`🌐 Network: ${hre.network.name}`);
    });

    describe("Manual Deployment Tests", function () {
        it("Should deploy Registry with specified oracle address", async function () {
            console.log("🚀 Testing manual deployment...");
            
            const oracleAddress = deployer.address;
            
            // Deploy manually (simulating what Ignition does)
            const registry = await Registry.deploy(oracleAddress);
            await registry.waitForDeployment();
            
            // Verify deployment
            expect(await registry.getAddress()).to.be.properAddress;
            expect(await registry.oracleAddress()).to.equal(oracleAddress);
            expect(await registry.totalGpuSupply()).to.equal(0);
            
            console.log(`✅ Registry deployed at: ${await registry.getAddress()}`);
            console.log(`🔮 Oracle set to: ${await registry.oracleAddress()}`);
        });

        it("Should deploy with custom oracle address", async function () {
            const customOracle = addr1.address;
            
            const registry = await Registry.deploy(customOracle);
            await registry.waitForDeployment();
            
            expect(await registry.oracleAddress()).to.equal(customOracle);
            expect(await registry.totalGpuSupply()).to.equal(0);
        });

        it("Should reject zero address during deployment", async function () {
            // This should fail at the contract level
            await expect(Registry.deploy(hre.ethers.ZeroAddress))
                .to.be.revertedWith("Oracle address cannot be zero");
        });
    });

    describe("Deployment Module Logic Tests", function () {
        let RegistryModule;

        before(function () {
            // Import the deployment module for testing its logic
            RegistryModule = require("../ignition/modules/Registry.js");
        });

        it("Should provide correct default oracle addresses", function () {
            if (RegistryModule.getDefaultOracleForNetwork) {
                const hardhatDefault = RegistryModule.getDefaultOracleForNetwork("hardhat");
                expect(hardhatDefault).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
                
                const localhostDefault = RegistryModule.getDefaultOracleForNetwork("localhost");
                expect(localhostDefault).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
                
                // Unknown network should fallback to hardhat
                const unknownDefault = RegistryModule.getDefaultOracleForNetwork("unknown");
                expect(unknownDefault).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
            }
        });
    });

    describe("Post-Deployment Functionality", function () {
        let registry;
        let oracle;

        beforeEach(async function () {
            oracle = addr1;
            registry = await Registry.deploy(oracle.address);
            await registry.waitForDeployment();
        });

        it("Should allow oracle to update GPU supply", async function () {
            const newSupply = 1500;
            
            await registry.connect(oracle).updateGpuSupply(newSupply);
            expect(await registry.totalGpuSupply()).to.equal(newSupply);
        });

        it("Should prevent non-oracle from updating supply", async function () {
            const newSupply = 500;
            
            await expect(registry.connect(addr2).updateGpuSupply(newSupply))
                .to.be.revertedWith("Only the Oracle can call this function");
        });

        it("Should allow oracle role transfer", async function () {
            const newOracle = addr2.address;
            
            await registry.connect(oracle).transferOracleRole(newOracle);
            expect(await registry.oracleAddress()).to.equal(newOracle);
            
            // New oracle should work
            await registry.connect(addr2).updateGpuSupply(1000);
            expect(await registry.totalGpuSupply()).to.equal(1000);
        });
    });

    describe("Gas Analysis", function () {
        it("Should deploy within reasonable gas limits", async function () {
            console.log("⛽ Analyzing deployment gas usage...");
            
            const deployTx = await Registry.getDeployTransaction(deployer.address);
            const estimatedGas = await deployer.estimateGas(deployTx);
            
            console.log(`📊 Estimated deployment gas: ${estimatedGas}`);
            
            // Deploy and get actual gas used
            const registry = await Registry.deploy(deployer.address);
            const receipt = await registry.deploymentTransaction().wait();
            
            console.log(`📊 Actual deployment gas: ${receipt.gasUsed}`);
            
            // Basic assertion - deployment should use reasonable gas
            expect(receipt.gasUsed).to.be.below(1000000); // Less than 1M gas
        });
    });

    describe("Multiple Deployments", function () {
        it("Should deploy multiple independent instances", async function () {
            console.log("🔀 Testing multiple deployments...");
            
            // Deploy first instance
            const registry1 = await Registry.deploy(addr1.address);
            await registry1.waitForDeployment();
            
            // Deploy second instance
            const registry2 = await Registry.deploy(addr2.address);
            await registry2.waitForDeployment();
            
            // Verify they are different
            expect(await registry1.getAddress()).to.not.equal(await registry2.getAddress());
            expect(await registry1.oracleAddress()).to.equal(addr1.address);
            expect(await registry2.oracleAddress()).to.equal(addr2.address);
            
            // Test independence
            await registry1.connect(addr1).updateGpuSupply(100);
            await registry2.connect(addr2).updateGpuSupply(200);
            
            expect(await registry1.totalGpuSupply()).to.equal(100);
            expect(await registry2.totalGpuSupply()).to.equal(200);
        });
    });

    describe("End-to-End Workflow", function () {
        it("Should work through complete deployment and operation cycle", async function () {
            console.log("🔄 Running end-to-end test...");
            
            // 1. Deploy
            const registry = await Registry.deploy(deployer.address);
            await registry.waitForDeployment();
            
            // 2. Verify initial state
            expect(await registry.oracleAddress()).to.equal(deployer.address);
            expect(await registry.totalGpuSupply()).to.equal(0);
            
            // 3. Update supply
            await registry.connect(deployer).updateGpuSupply(1000);
            expect(await registry.totalGpuSupply()).to.equal(1000);
            
            // 4. Transfer oracle role
            await registry.connect(deployer).transferOracleRole(addr1.address);
            expect(await registry.oracleAddress()).to.equal(addr1.address);
            
            // 5. New oracle updates supply
            await registry.connect(addr1).updateGpuSupply(2000);
            expect(await registry.totalGpuSupply()).to.equal(2000);
            
            // 6. Old oracle can't update
            await expect(registry.connect(deployer).updateGpuSupply(3000))
                .to.be.revertedWith("Only the Oracle can call this function");
                
            console.log("✅ End-to-end test completed successfully!");
        });
    });
});