// contracts/Registry.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/**
 * @title Registry
 * @dev A simple smart contract to store and update the total GPU supply,
 * only allowing a designated Oracle address to make updates.
 */
contract Registry {
    // Public variable to store the total GPU supply.
    // This variable can be read by anyone.
    uint256 public totalGpuSupply;

    // Address of the Oracle that is authorized to update the GPU supply.
    // This will be set during deployment or by a constructor.
    address public oracleAddress;

    // Event emitted when the GPU supply is updated.
    // Useful for off-chain applications to track changes.
    event GpuSupplyUpdated(uint256 oldSupply, uint256 newSupply, address indexed updater);
    event OracleTransferred(address indexed oldOracle, address indexed newOracle);

    /**
     * @dev Constructor to set the Oracle address upon contract deployment.
     * @param _oracleAddress The address of the Oracle that will be authorized to update the supply.
     */
    constructor(address _oracleAddress) {
        require(_oracleAddress != address(0), "Oracle address cannot be zero");
        oracleAddress = _oracleAddress;
        totalGpuSupply = 0; // Initialize totalGpuSupply to 0
    }

    /**
     * @dev Modifier to restrict function calls to only the designated Oracle address.
     */
    modifier onlyOracle() {
        require(msg.sender == oracleAddress, "Only the Oracle can call this function");
        _;
    }

    /**
     * @dev Updates the total GPU supply.
     * This function can only be called by the `oracleAddress`.
     * @param _newSupply The new total GPU supply value.
     */
    function updateGpuSupply(uint256 _newSupply) public onlyOracle {
        uint256 oldSupply = totalGpuSupply;
        totalGpuSupply = _newSupply;
        emit GpuSupplyUpdated(oldSupply, _newSupply, msg.sender);
    }

    /**
     * @dev Allows the current Oracle to transfer its role to a new address.
     * This function can only be called by the current `oracleAddress`.
     * Useful for upgrading or changing the Oracle.
     * @param _newOracleAddress The address of the new Oracle.
     */
    function transferOracleRole(address _newOracleAddress) public onlyOracle {
        require(_newOracleAddress != address(0), "New Oracle address cannot be zero");
        require(_newOracleAddress != oracleAddress, "New Oracle cannot be the current Oracle");
        oracleAddress = _newOracleAddress;
        emit OracleTransferred(msg.sender, _newOracleAddress);
    }
}
