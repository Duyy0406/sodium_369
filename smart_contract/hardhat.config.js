// hardhat.config.js (ESM)
import dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const {
  KURTOSIS_RPC_URL = "http://127.0.0.1:32789",
  KURTOSIS_PRIVATE_KEY,
  SEPOLIA_PRIVATE_KEY,
  SEPOLIA_RPC_URL = "",
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: SEPOLIA_PRIVATE_KEY ? [SEPOLIA_PRIVATE_KEY] : [],
    },
    kurtosis: {
      url: KURTOSIS_RPC_URL,
      accounts: KURTOSIS_PRIVATE_KEY ? [KURTOSIS_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: { mykurtosistestnet: "empty" },
    customChains: [
      {
        network: "mykurtosistestnet",
        chainId: 3151908,
        urls: {
          apiURL: "http://localhost/api",
          browserURL: "http://localhost",
        },
      },
    ],
  },
};

export default config;
