import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const KURTOSIS_RPC_URL = process.env.KURTOSIS_RPC_URL || "http://127.0.0.1:50740";
const KURTOSIS_PRIVATE_KEY = process.env.KURTOSIS_PRIVATE_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "", // Make sure to set SEPOLIA_RPC_URL in your .env
      accounts: SEPOLIA_PRIVATE_KEY ? [SEPOLIA_PRIVATE_KEY] : [],
    },
    kurtosis: {
      url: KURTOSIS_RPC_URL,
      accounts: KURTOSIS_PRIVATE_KEY ? [KURTOSIS_PRIVATE_KEY] : [],
    },
  },

  etherscan: {
    apiKey: {
      'mykurtosistestnet': 'empty'
    },
    customChains: [
      {
        network: "mykurtosistestnet",
        chainId: 3151908,
        urls: {
          apiURL: "http://localhost/api",
          browserURL: "http://localhost"
        }
      }
    ]
  }
};