const { expect } = require("chai");
const hre = require("hardhat");

describe("Registry", function () {
    let Registry;
    let registry;
    let owner; // This will be the initial oracle
    let addr1; // A regular user / potential new oracle
    let addr2; // Another regular user

    // Before each test, deploy a new Registry contract
    beforeEach(async function () {
        console.log("⚙️  Running beforeEach");

        try {
            [owner, addr1, addr2] = await hre.ethers.getSigners();
            Registry = await hre.ethers.getContractFactory("Registry");
            registry = await Registry.deploy(owner.address);
            await registry.waitForDeployment();

            console.log("✅ Deployment done");
        } catch (err) {
            console.error("❌ beforeEach error:", err);
            throw err; 
        }
    });


    describe("Deployment", function () {
        it("Should set the right oracleAddress", async function () {
            console.log("👀 Checking oracleAddress...");
            expect(await registry.oracleAddress()).to.equal(owner.address);
        });

        it("Should initialize totalGpuSupply to 0", async function () {
            // Check that totalGpuSupply is initially 0
            expect(await registry.totalGpuSupply()).to.equal(0);
        });
    });

    describe("updateGpuSupply", function () {
        it("Should allow the oracle to update the GPU supply", async function () {
            const newSupply = 1000;

            // Connect as the oracle (owner) and call updateGpuSupply
            await registry.connect(owner).updateGpuSupply(newSupply);

            // Verify that totalGpuSupply has been updated
            expect(await registry.totalGpuSupply()).to.equal(newSupply);
        });

        it("Should emit a GpuSupplyUpdated event when supply is updated", async function () {
            const oldSupply = await registry.totalGpuSupply(); // Should be 0
            const newSupply = 2500;

            // Expect the GpuSupplyUpdated event to be emitted with the correct values
            await expect(registry.connect(owner).updateGpuSupply(newSupply))
                .to.emit(registry, "GpuSupplyUpdated")
                .withArgs(oldSupply, newSupply, owner.address);
        });

        it("Should revert if a non-oracle tries to update the GPU supply", async function () {
            const newSupply = 500;

            // Connect as a non-oracle (addr1) and try to call updateGpuSupply
            await expect(registry.connect(addr1).updateGpuSupply(newSupply))
                .to.be.revertedWith("Only the Oracle can call this function");

            // Ensure the supply was not changed
            expect(await registry.totalGpuSupply()).to.equal(0);
        });
    });

    describe("transferOracleRole", function () {
        it("Should allow the current oracle to transfer the role to a new address", async function () {
            const newOracle = addr1.address;

            // Connect as the current oracle (owner) and transfer the role
            await registry.connect(owner).transferOracleRole(newOracle);

            // Verify that the oracleAddress has been updated to the new address
            expect(await registry.oracleAddress()).to.equal(newOracle);
        });

        it("Should revert if a non-oracle tries to transfer the role", async function () {
            const newOracle = addr2.address;

            // Connect as a non-oracle (addr1) and try to transfer the role
            await expect(registry.connect(addr1).transferOracleRole(newOracle))
                .to.be.revertedWith("Only the Oracle can call this function");

            // Ensure the oracleAddress has not changed
            expect(await registry.oracleAddress()).to.equal(owner.address);
        });

        it("Should revert if the new oracle address is zero", async function () {
            // Try to transfer the role to the zero address
            await expect(registry.connect(owner).transferOracleRole(hre.ethers.ZeroAddress))
                .to.be.revertedWith("New Oracle address cannot be zero");

            // Ensure the oracleAddress has not changed
            expect(await registry.oracleAddress()).to.equal(owner.address);
        });
    });

    // Additional test cases to add to your Registry.js test suite

describe("Edge Cases & Additional Coverage", function () {
    
    describe("updateGpuSupply - Edge Cases", function () {
        it("Should handle updating supply to the same value", async function () {
            const supply = 1000;
            
            // Set initial supply
            await registry.connect(owner).updateGpuSupply(supply);
            
            // Update to same value
            await expect(registry.connect(owner).updateGpuSupply(supply))
                .to.emit(registry, "GpuSupplyUpdated")
                .withArgs(supply, supply, owner.address);
                
            expect(await registry.totalGpuSupply()).to.equal(supply);
        });

        it("Should handle updating supply to zero", async function () {
            // First set to non-zero
            await registry.connect(owner).updateGpuSupply(1000);
            
            // Then update to zero
            await registry.connect(owner).updateGpuSupply(0);
            
            expect(await registry.totalGpuSupply()).to.equal(0);
        });

        it("Should handle very large supply values", async function () {
            const largeSupply = hre.ethers.parseEther("1000000"); // Large number
            
            await registry.connect(owner).updateGpuSupply(largeSupply);
            
            expect(await registry.totalGpuSupply()).to.equal(largeSupply);
        });

        it("Should handle multiple consecutive updates", async function () {
            const supplies = [100, 500, 250, 1000];
            
            for (let i = 0; i < supplies.length; i++) {
                await registry.connect(owner).updateGpuSupply(supplies[i]);
                expect(await registry.totalGpuSupply()).to.equal(supplies[i]);
            }
        });
    });

    describe("transferOracleRole - Additional Cases", function () {
        it("Should emit an event when oracle role is transferred", async function () {
            const newOracle = addr1.address;
            
            // Check if there's an OracleTransferred event (add to contract if missing)
            await expect(registry.connect(owner).transferOracleRole(newOracle))
                .to.emit(registry, "OracleTransferred") // Add this event to contract
                .withArgs(owner.address, newOracle);
        });

        it("Should allow new oracle to update GPU supply after transfer", async function () {
            // Transfer role to addr1
            await registry.connect(owner).transferOracleRole(addr1.address);
            
            // New oracle should be able to update supply
            const newSupply = 750;
            await registry.connect(addr1).updateGpuSupply(newSupply);
            
            expect(await registry.totalGpuSupply()).to.equal(newSupply);
        });

        it("Should prevent old oracle from updating after role transfer", async function () {
            // Transfer role to addr1
            await registry.connect(owner).transferOracleRole(addr1.address);
            
            // Old oracle should no longer be able to update
            await expect(registry.connect(owner).updateGpuSupply(500))
                .to.be.revertedWith("Only the Oracle can call this function");
        });

        it("Should allow transferring role multiple times", async function () {
            // Transfer from owner to addr1
            await registry.connect(owner).transferOracleRole(addr1.address);
            expect(await registry.oracleAddress()).to.equal(addr1.address);
            
            // Transfer from addr1 to addr2
            await registry.connect(addr1).transferOracleRole(addr2.address);
            expect(await registry.oracleAddress()).to.equal(addr2.address);
        });

        it("Should revert if trying to transfer to current oracle", async function () {
            // Try to transfer to self
            await expect(registry.connect(owner).transferOracleRole(owner.address))
                .to.be.revertedWith("New Oracle cannot be the current Oracle");
        });
    });

    describe("State Consistency", function () {
        it("Should maintain correct state after multiple operations", async function () {
            const supply1 = 1000;
            const supply2 = 2000;
            
            // Update supply
            await registry.connect(owner).updateGpuSupply(supply1);
            
            // Transfer oracle
            await registry.connect(owner).transferOracleRole(addr1.address);
            
            // New oracle updates supply
            await registry.connect(addr1).updateGpuSupply(supply2);
            
            // Verify final state
            expect(await registry.oracleAddress()).to.equal(addr1.address);
            expect(await registry.totalGpuSupply()).to.equal(supply2);
        });
    });

    describe("Gas Usage Tests", function () {
        it("Should have reasonable gas costs for updates", async function () {
            const tx = await registry.connect(owner).updateGpuSupply(1000);
            const receipt = await tx.wait();
            
            console.log(`Gas used for updateGpuSupply: ${receipt.gasUsed}`);
            // Add assertion if you have specific gas requirements
            // expect(receipt.gasUsed).to.be.below(50000);
        });
    });
});

// Tests for view functions (if any exist in your contract)
describe("View Functions", function () {
    it("Should return correct oracle address", async function () {
        expect(await registry.oracleAddress()).to.equal(owner.address);
        
        // After transfer
        await registry.connect(owner).transferOracleRole(addr1.address);
        expect(await registry.oracleAddress()).to.equal(addr1.address);
    });

    it("Should return correct total GPU supply", async function () {
        const supply = 1500;
        await registry.connect(owner).updateGpuSupply(supply);
        
        expect(await registry.totalGpuSupply()).to.equal(supply);
    });
});
});