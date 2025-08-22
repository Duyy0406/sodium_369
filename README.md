# Sodium Layer 3: GPU Infrastructure Blockchain

A Layer 3 blockchain platform built on Base for tokenizing GPU computational power, with the native token $DIUM minted proportionally to the active GPU supply.

## 📖 Overview

Sodium Layer 3 transforms traditional GPU infrastructure business into a dynamic digital economy by:

- **Tokenizing Computational Power**: Converting GPU capacity into the liquid digital asset $DIUM
- **Creating Global Access**: Breaking geographical barriers for GPU rental and investment
- **Establishing a Growth Flywheel**: Token sales fund infrastructure expansion, increasing GPU supply and $DIUM value

## 🏗️ Architecture

<!-- A diagram of the project architecture can be added here -->

### Core Components

1.  **Layer 3 Blockchain**
    -   Fork of go-ethereum running on Base (Ethereum L2)
    -   Custom "Proof of GPU Supply" consensus mechanism

2.  **Oracle System**
    -   Python-based service that verifies active GPU infrastructure
    -   Reports verified data to smart contracts

3.  **Agent Software**
    -   Python script running on GPU machines
    -   Reports capacity and availability to Oracle

4.  **Smart Contracts**
    -   Registry Contract: Stores current GPU supply data
    -   $DIUM Token: Minted based on verified GPU supply

5.  **Block Explorer**
    -   Customized Blockscout instance
    -   Real-time GPU Supply Dashboard

## 🚀 Quick Start Guide

### Prerequisites

-   Docker and Docker Compose
-   Node.js v16+
-   Python 3.8+
-   Git
-   Kurtosis CLI
-   MetaMask or other Ethereum wallet

### Step-by-Step Setup

#### 1. Setting Up the Local Blockchain Network

```bash
# Clone the repository
git clone https://github.com/sodium-layer3/sodium.git
cd sodium

# Install Kurtosis if not already installed
curl -L https://releases.kurtosis.com/install.sh | bash
source ~/.bashrc

# Start local blockchain network with Kurtosis
# Run docker
cd go-ethereum
kurtosis run github.com/ethpandaops/ethereum-package --args-file ./network_params.yaml --image-download always --enclave sodium-testnet

# Verify the network is running
kurtosis enclave inspect sodium-testnet
```

#### 2. Deploying Smart Contracts

```bash
# Navigate to contracts directory
cd smart_contract

# Install dependencies
npm install

# Configure (edit .env file)
cp .env.example .env
# Edit .env to update RPC_URL

# Deploy the Registry contract (uses the "kurtosis" network config)
npx hardhat run scripts/deploy-kurtosis.js --network kurtosis

# Note the deployed contract address - you'll need it for the Oracle
```

#### 3. Starting the Oracle Service

```bash
# Navigate to the oracle directory
cd ../oracle_service

# Install Python dependencies
pip install -r requirements.txt

# Configure the Oracle (edit .env file with your contract address)
cp .env.example .env
# Edit .env with your favorite editor to update CONTRACT_ADDRESS and other settings

# Run the Oracle service
python3 -m src.main
```

#### 4. Running the GPU Agent

```bash
# Navigate to the agent directory
cd ../agent

# Install Python dependencies
pip install -r requirements.txt

# Configure the agent (edit .env file)
cp .env.example .env
# Edit .env to update ORACLE_URL and AGENT_ID

# Run the agent
python3 agent.py
```

#### 5. Deploying Blockscout Explorer

```bash
# Navigate to the blockscout directory
cd ../frontend/blockscout/docker-compose

# Configure environment variables
cp docker-compose/envs/common-frontend.env.example docker-compose/envs/common-frontend.env
# Edit common-frontend.env to set the NODE_RPC_URL to your Kurtosis RPC endpoint

# Start Blockscout services
docker-compose -f docker-compose/docker-compose.yml up -d
```

### Accessing Services

-   **Blockchain RPC**: URL provided in the Kurtosis output (typically http://localhost:8545)
-   **Block Explorer**: http://localhost:80
-   **GPU Supply Dashboard**: http://localhost:80/gpu-supply
-   **Oracle API**: http://localhost:3000

## 📊 Monitoring GPU Supply

1.  Access the Block Explorer at http://localhost:80
2.  Navigate to the GPU Supply Dashboard
3.  The dashboard shows the current total GPU supply fetched from the smart contract

## 🛠️ Development Workflow

### Agent Development

```bash
# Edit the Python agent file
nano agent/agent.py

# Test agent functionality
python3 agent/agent.py
```

### Oracle Service Development

```bash
# Edit Oracle service code
cd oracle

# Run in development mode
python3 -m src.main --dev
```

## 🗺️ Roadmap

-   [x] Initial concept and design
-   [ ] Testnet MVP
    -   [x] Local blockchain network setup using Kurtosis
    -   [ ] Python-based agent for GPU metrics reporting
    -   [x] Oracle service for data validation
    -   [x] Registry smart contract deployment
    -   [ ] Customized Blockscout Explorer
-   [ ] Agent executable packaging
-   [ ] Alpha release with staking functionality
-   [ ] Beta release with full GPU rental capabilities
-   [ ] Mainnet launch

## 📜 License

This project is licensed under the [MIT License](LICENSE).