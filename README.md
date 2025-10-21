# 🏠 Digital House

### Decentralized Booking Platform with Auction System and AI Agents

**Eliminating billions in losses from last-minute cancellations through blockchain auctions and PYUSD**

[![License: MIT] https://img.shields.io/badge/License-MIT-yellow.svg  ] https://opensource.org/licenses/MIT  
[![Solidity] https://img.shields.io/badge/Solidity-0.8.20-363636?logo=solidity  ] https://soliditylang.org/  
[![Next.js] https://img.shields.io/badge/Next.js-14-black?logo=next.js  ] https://nextjs.org/  

---

## 🎯 The Problem

The booking industry  hotels, events, flights   loses **billions of dollars annually** due to last-minute cancellations:
- Hotels with empty rooms losing revenue
- Users losing their deposits
- No secondary market for transferring reservations
- Inefficient system for everyone involved

## 💡 Our Solution

Digital House creates a **decentralized booking ecosystem** where:
- ✅ Users stake PYUSD to secure reservations
- ✅ **Auction system** allows transferring reservations with value
- ✅ Smart contracts automate all logic transparently
- ✅ AI agents enhance user experience
- ✅ Access codes generated on-chain

---

## 🚀 Live Demo

- **Frontend:** [digitalhouse.vercel.app] https://digitalhouse.vercel.app   * Coming soon  *
- **Video Demo:** [Watch on YouTube] https://youtube.com/...   * 5 min demo  *
- **Presentation:** [Pitch Deck] https://...   * Optional  *

---


```mermaid
graph TD
A[Usuario] --> B[Reserva con PYUSD]
B --> C[Smart Contract DigitalHouseVault]
C --> D[Sistema de Subastas]
D --> E[Agente de IA Asiste a Gestionar ofertas]
E --> F{Decisión del usuario}
F --> Mantiene  G[Check-In y Código On-Chain]
F --> Cede  H[Transferencia de Reserva]
G --> I[Pago al Hotel y Digital House]
H --> J[Distribución de Ganancia]
J --> I
I --> K[Check-Out y Cierre de Contrato]

```

## 📋 Table of Contents

- [How It Works] #-how-it-works  
- [Key Features] #-key-features  
- [Technical Architecture] #-technical-architecture  
- [Smart Contracts] #-smart-contracts  
- [Getting Started] #-getting-started  
- [Usage Guide] #-usage-guide  
- [Technology Stack] #-technology-stack  
- [Team] #-team  

---


## 🏠 DIGITAL HOUSE FLOW


```
## 🔄 How It Works
### Example
┌─────────────────────────────────────────────────────────────┐
│                    DIGITAL HOUSE FLOW                        │
└─────────────────────────────────────────────────────────────┘

1️⃣ INITIAL RESERVATION  FREE → AUCTION  
   User A wants to book apartment Oct 20-25
   ├─ Stakes: 1,000 PYUSD
   ├─ Receives: 100% ownership  shares in vault  
   ├─ State: AUCTION
   └─ Nonce: 1

2️⃣ AUCTION SYSTEM  AUCTION  
   Other users can offer more
   ├─ User B offers: 1,200 PYUSD
   ├─ User C offers: 1,500 PYUSD
   └─ User A has until 1 day before check-in to decide

3️⃣ DECISION  AUCTION  
   
   Option A: Keep Reservation
   └─ User A maintains booking, bids refunded
   
   Option B: Cede Reservation  Citizen Value  
   User A cedes to User C  1,500 PYUSD offer  
   
   ⚡ IMPORTANT: Distribution applies ONLY to additional value
   Additional Value = 1,500 - 1,000 = 500 PYUSD
   
   Distribution of 500 PYUSD:
   ├─ 20%  100 PYUSD   → Digital House 
   ├─ 50%  250 PYUSD   → Hotel
   └─ 30%  150 PYUSD   → User A
   
   User A receives:
   ├─ Original stake returned: 1,000 PYUSD
   ├─ Profit  30% of additional  : 150 PYUSD
   └─ TOTAL: 1,150 PYUSD ✅
   
   User C now owns the reservation with 1,500 PYUSD stake

4️⃣ CHECK-IN  AUCTION → SETTLED  
   Day of check-in  Oct 20  
   ├─ User executes check-in
   ├─ PYUSD payment distributed:
   │   ├─ 95% → Real Estate/Hotel
   │   └─ 5% → Digital House
   ├─ Generates 6-digit code: "234567"
   └─ Code opens box with room access card

5️⃣ CHECK-OUT  SETTLED → FREE  
   Day of check-out  Oct 25  
   ├─ User executes check-out
   ├─ Contract settles
   ├─ Vault returns to FREE state
   └─ Nonce increments: 2
```

---

## ✨ Key Features

### 🔐 Blockchain-Powered Reservations
- Immutable reservations on Ethereum
- PYUSD stablecoin for payments
- Transparent smart contracts
- No intermediaries needed

### 💰 Auction System
- Secondary market for reservations
- Price discovery through competitive bidding
- Fair value distribution
- Win-win for all participants

### 🤖 AI Multi-Agent System
- Each vault has dedicated AI agent
- Real-time auction management
- Profit calculations and recommendations
- 24/7 user support

### 🎟️ On-Chain Access Codes
- 6-digit codes generated on-chain
- Unique per reservation
- QR code integration
- Smart lock compatible

### 💸 Fair Payment Distribution

**Normal Payment  100% of stake  :**
  Recipient   Percentage   Example  1,000 PYUSD    
 ----------- ------------ ---------------------- 
  Hotel   95%   950 PYUSD  
  Digital House   5%   50 PYUSD  

**Cession - Citizen Value  only on additional value  :**

*Example: Stake 1,000 PYUSD → Offer 1,500 PYUSD*
*Additional Value: 500 PYUSD*

  Recipient   Percentage   Amount  
 ----------- ------------ -------- 
  Digital House   20%   100 PYUSD  
  Hotel   50%   250 PYUSD  
  Original User   30%   150 PYUSD  
  + Original Stake   -   + 1,000 PYUSD  

**Total Original User receives: 1,150 PYUSD  150 PYUSD profit  **

---

## 🏗️ Technical Architecture

```mermaid

%% Arquitectura Técnica Simplificada
subgraph Arquitectura
L[Frontend Next.js] --> M[Integración Web3 Viem Wagmi]
M --> N[Contratos en Solidity]
N --> O[Blockchain Ethereum Arbitrum Base]
O --> P[Pago con PYUSD]
N --> Q[Agente de IA ASI]
end

```

```
┌─────────────────────────────────────────────────────────────┐
│                    ARCHITECTURE LAYERS                       │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  FRONTEND LAYER  Next.js 14 + TypeScript                     │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │  Dashboard │  │  Auction   │  │  AI Chat   │            │
│  │  Component │  │  Panel     │  │  Interface │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  WEB3 INTEGRATION LAYER                                      │
│  ┌─────────┐  ┌─────────┐  ┌──────────┐  ┌──────────┐      │
│  │ Privy   │  │  Viem   │  │  Wagmi   │  │  Ethers  │      │
│  │  Auth    │  │  Chain   │  │   Hooks   │  │   Utils   │      │
│  └─────────┘  └─────────┘  └──────────┘  └──────────┘      │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  SMART CONTRACT LAYER  Solidity 0.8.20                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  DigitalHouseFactory.sol                             │   │
│  │  - createVault                                        │   │
│  │  - getVaultInfo                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ↓                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  DigitalHouseVault.sol  Multiple Instances           │   │
│  │  - createReservation                                  │   │
│  │  - placeBid                                           │   │
│  │  - cedeReservation                                    │   │
│  │  - checkIn                                            │   │
│  │  - checkOut                                           │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  BLOCKCHAIN LAYER                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Ethereum   │  │   Arbitrum   │  │     Base     │      │
│  │   Sepolia    │  │   Sepolia    │  │   Sepolia    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  PAYMENT LAYER                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  PYUSD  PayPal USD Stablecoin                         │   │
│  │  - Ethereum Sepolia: 0xCaC524...3bB9                 │   │
│  │  - Arbitrum Sepolia: 0x637A12...aB1B1                │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  AI LAYER  Optional - Can use Mock for MVP                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  ASI  Artificial Superintelligence Alliance           │   │
│  │  - Auction analysis                                  │   │
│  │  - Profit calculations                               │   │
│  │  - User guidance                                     │   │
│  │  - Event notifications                               │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

---

## 📜 Smart Contracts

### Contract States

```solidity
enum VaultState {
    FREE,      // Available for booking
    AUCTION,   // Has reservation, accepting bids
    SETTLED    // Check-in completed
}
```

### Main Contracts

#### 1. DigitalHouseFactory.sol
Factory pattern for creating multiple vault instances.

**Key Functions:**
- `createVault vaultId, propertyDetails, basePrice  ` - Create new property vault
- `getVaultAddress vaultId  ` - Get vault address by ID
- `getVaultInfo vaultId  ` - Get complete vault information
- `getAllVaultIds   ` - List all created vaults
- `getOwnerVaults owner  ` - Get vaults by owner

#### 2. DigitalHouseVault.sol
Core contract managing reservations, auctions, and payments.

**Key Functions:**

**Reservation Management:**
- `createReservation stakeAmount, checkInDate, checkOutDate  ` - Create initial reservation
- `cancelReservation   ` - Cancel and move to next bidder
- `getCurrentReservation   ` - Get current reservation details

**Auction System:**
- `placeBid bidAmount  ` - Make an offer on existing reservation
- `withdrawBid bidIndex  ` - Withdraw your bid
- `cedeReservation bidIndex  ` - Original booker cedes to highest bidder
- `getAuctionBids   ` - Get all active bids

**Check-in/Check-out:**
- `checkIn   ` - Execute check-in and generate access code
- `checkOut   ` - Complete stay and settle contract

**View Functions:**
- `getVaultInfo   ` - Get vault state, price, and nonce
- `currentState   ` - Get current vault state
- `getAccessCode   ` - Get current access code  after check-in  

### Deployed Contracts

#### Ethereum Sepolia
```
Factory: 0x...  Deploy coming soon  
PYUSD:   0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9
```

#### Arbitrum Sepolia
```
Factory: 0x...  Deploy coming soon  
PYUSD:   0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1
```

#### Base Sepolia
```
Factory: 0x...  Deploy coming soon  
PYUSD:   TBD
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git
- MetaMask or compatible Web3 wallet
- PYUSD testnet tokens  we'll provide faucet  

### Project Structure

```
digitalhouse/
├── contracts/                      # Smart contracts  Hardhat  
│   ├── core/                      # Core contracts
│   │   ├── DigitalHouseFactory.sol
│   │   └── DigitalHouseVault.sol
│   ├── interfaces/                # Contract interfaces
│   │   ├── IDigitalHouseFactory.sol
│   │   └── IDigitalHouseVault.sol
│   ├── libraries/                 # Reusable libraries
│   ├── mocks/                     # Mock contracts for testing
│   └── utils/                     # Utility contracts
│
├── frontend/                       # Next.js 14 frontend
│   ├── app/                       # App Router pages
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Root layout with Privy
│   │   └── dashboard/            # Dashboard pages
│   ├── components/                # React components
│   │   ├── auth/                 # Authentication  Privy  
│   │   ├── providers/            # Context providers
│   │   ├── vault/                # Vault components
│   │   └── ui/                   # Reusable UI
│   ├── lib/                       # Utilities and config
│   │   ├── config.ts             # App configuration
│   │   ├── chains.ts             # Network definitions
│   │   └── utils.ts              # Helper functions
│   └── types/                     # TypeScript types
│
├── ignition/modules/              # Deployment modules  Hardhat 3  
│   └── DigitalHouseFactory.ts
│
├── test/                          # Contract tests
│   ├── unit/                      # Unit tests
│   └── integration/               # Integration tests
│
├── scripts/                       # Deployment scripts
│   ├── deploy.ts
│   └── verify.ts
│
├── docs/                          # Documentation
├── hardhat.config.ts              # Hardhat configuration
├── package.json
└── README.md
```

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/your-org/digital-house-ethonline.git
cd digital-house-ethonline
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PRIVATE_KEY=your_private_key_here
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
ARBITRUM_SEPOLIA_RPC_URL=https://sepolia-rollup.arbitrum.io/rpc
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# Token addresses
PYUSD_SEPOLIA=0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9
PYUSD_ARBITRUM_SEPOLIA=0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1

# Distribution addresses
REAL_ESTATE_ADDRESS=0x...
DIGITAL_HOUSE_ADDRESS=0x...
Digital House_ADDRESS=0x...

# Block explorers  for verification  
ETHERSCAN_API_KEY=your_etherscan_key
ARBISCAN_API_KEY=your_arbiscan_key
BASESCAN_API_KEY=your_basescan_key
```

#### 4. Compile Contracts

```bash
npm run compile
```

#### 5. Run Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run with gas reporting
npm run test:gas
```

#### 6. Deploy Contracts

Using Hardhat Ignition  recommended  :

```bash
# Deploy to local network
npm run deploy:local

# Deploy to Sepolia
npm run deploy:sepolia

# Deploy to Arbitrum Sepolia
npm run deploy:arbitrum

# Deploy to Base Sepolia
npm run deploy:base
```

Or using manual deployment script:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

#### 7. Verify Contracts

```bash
# Verify on Sepolia
npm run verify:sepolia

# Verify on Arbitrum Sepolia
npm run verify:arbitrum

# Verify on Base Sepolia
npm run verify:base
```

### Development Commands

```bash
npm run compile      # Compile contracts
npm test            # Run tests
npm run clean       # Clean artifacts
npm run node        # Start local Hardhat node
npm run console     # Open Hardhat console
```

### Frontend Setup  Next.js + Privy  

After deploying contracts, set up the frontend:

#### 1. Navigate to Frontend

```bash
cd frontend
```

#### 2. Install Frontend Dependencies

```bash
npm install
```

#### 3. Get Privy Credentials

1. Create account at [dashboard.privy.io] https://dashboard.privy.io/  
2. Create a new app
3. Enable these testnets in Privy dashboard:
   - Ethereum Sepolia  11155111  
   - Arbitrum Sepolia  421614  
   - Base Sepolia  84532  
4. Enable login methods: Wallet, Email, Google, Twitter
5. Copy your App ID and Client ID

#### 4. Configure Frontend Environment

Create `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Privy  Required  
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_PRIVY_CLIENT_ID=your_privy_client_id

# Smart Contracts  Use addresses from step 6 deployment  
NEXT_PUBLIC_FACTORY_ADDRESS=0x_your_deployed_factory_address

# PYUSD Addresses  Pre-configured  
NEXT_PUBLIC_PYUSD_SEPOLIA=0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9
NEXT_PUBLIC_PYUSD_ARBITRUM_SEPOLIA=0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1
```

#### 5. Run Frontend Development Server

```bash
npm run dev
```

Open [http://localhost:3000] http://localhost:3000  

#### Frontend Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

---

## 📖 Usage Guide

### For Property Owners

1. **Connect Wallet**
   - Click "Connect Wallet" in header
   - Approve Privy authentication

2. **Create Vault**
   - Navigate to "Create Property"
   - Fill in property details  vaultId, description, base price  
   - Deploy vault transaction
   - Receive vault address

3. **Manage Bookings**
   - View incoming reservations
   - Monitor auction activity
   - Receive payments automatically  95% of stake + 50% of additional value  

### For Guests/Users

#### Making a Reservation

1. **Browse Properties**
   - Explore available vaults  FREE state  
   - Check property details and base pricing

2. **Create Reservation**
   - Select check-in/check-out dates
   - Approve PYUSD tokens
   - Stake PYUSD for reservation  minimum: base price  
   - Receive 100% ownership shares
   - Vault moves to AUCTION state

3. **Monitor Auction**
   - View incoming bids in real-time
   - AI agent shows profit calculations
   - Decide to keep or cede reservation

#### Bidding on Existing Reservations

1. **Find Active Reservation**
   - Browse vaults in AUCTION state
   - Check current stake amount

2. **Place Bid**
   - Enter bid amount  must be higher than current stake  
   - Approve PYUSD
   - Submit bid transaction
   - Funds held in contract

3. **Wait for Decision**
   - Original booker has until 1 day before check-in
   - If accepted, you become the new booker
   - If rejected, funds are automatically returned

#### Ceding Your Reservation

1. **Review Bids**
   - AI agent shows all active offers
   - See profit calculation for each bid

2. **Calculate Profit**
   ```
   Example:
   Your stake: 1,000 PYUSD
   Highest bid: 1,500 PYUSD
   Additional value: 500 PYUSD
   
   Distribution of 500 PYUSD:
   - 20% to Digital House: 100 PYUSD
   - 50% to Hotel: 250 PYUSD
   - 30% to You: 150 PYUSD
   
   You receive:
   - Original stake: 1,000 PYUSD
   - Profit: 150 PYUSD
   - Total: 1,150 PYUSD ✅
   ```

3. **Cede Reservation**
   - Select winning bid
   - Confirm transaction
   - Receive PYUSD automatically
   - New user becomes reservation owner

#### Check-In

1. **Execute Check-In**
   - On check-in day, click "Check In"
   - Payment automatically distributed:
     - 95% → Hotel
     - 5% → Digital House
   - Receive 6-digit access code
   - Vault moves to SETTLED state

2. **Access Property**
   - Use code or scan QR
   - Open smart lock box
   - Get room access card

#### Check-Out

1. **Complete Stay**
   - On check-out day, click "Check Out"
   - Contract settles automatically
   - Vault returns to FREE state
   - Nonce increments for next booking

---

## 🛠️ Technology Stack

### Smart Contracts
- **Solidity 0.8.20** - Smart contract language
- **Hardhat** - Development environment
- **OpenZeppelin** - Secure contract libraries
- **Ethers.js** - Ethereum library

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Privy** - Wallet authentication and embedded wallets
- **Viem & Wagmi** - Web3 React hooks
- **React Query** - Data fetching and caching
- **Lucide React** - Icon library

### Blockchain
- **Ethereum Sepolia** - Primary testnet
- **Arbitrum Sepolia** - L2 scaling solution
- **Base Sepolia** - Coinbase L2
- **PYUSD** - PayPal USD stablecoin

### AI/ML
- **ASI  Fetch.ai  ** - Multi-agent system  planned  
- **OpenAI GPT-3.5** - Fallback option
- **Mock Agents** - MVP without external AI

### Infrastructure
- **Vercel** - Frontend hosting
- **GitHub** - Version control
- **IPFS** - Decentralized storage  future  

---

## 👥 Team

### Core Team

**linktavo** - Product Manager & Fullstack Developer
- GitHub: [@linktavo] https://github.com/linktavo  
- Role: Product vision, frontend architecture, coordination

**wmb81321** - IT Product Manager
- GitHub: [@wmb81321] https://github.com/wmb81321  
- Role: QA, testing, documentation, video production

**Taniaagredo** - Fullstack Developer
- GitHub: [@Taniaagredo] https://github.com/Taniaagredo  
- Role: UI/UX implementation, design system, frontend polish

**DevJhonnTorres** - Fullstack Developer
- GitHub: [@DevJhonnTorres] https://github.com/DevJhonnTorres  
- Role: Core components, AI integration, auction system

**ICREE8** - Smart Contract Developer
- GitHub: [@ICREE8] https://github.com/ICREE8  
- Role: Solidity development, testing, deployment, security

### Contact

- **Email:** team@digitalhouse.io
- **Twitter:** [@DigitalHouseWeb3] https://twitter.com/...  
- **Discord:** [Join our community] https://discord.gg/...  

---

## 🗺️ Roadmap

### ✅ Phase 1: MVP  ETHOnline 2024  
- [x] Core smart contracts with auction system
- [x] Factory pattern for multiple vaults
- [x] Citizen value distribution logic
- [x] Basic frontend with wallet integration
- [x] PYUSD payment integration
- [x] Access code generation
- [ ] AI agent integration  in progress  
- [ ] Deploy to testnet
- [ ] Demo video and documentation

### 🔄 Phase 2: Beta Launch
- [ ] Mainnet deployment
- [ ] 5-10 real properties onboarded
- [ ] Mobile-responsive design
- [ ] Advanced AI features with ASI
- [ ] Multi-chain support  Base, Arbitrum  
- [ ] Insurance integration

### 🚀 Phase 3: Scale 
- [ ] 100+ properties across 10 cities
- [ ] Dynamic pricing with ML

---

## 📊 Market Opportunity

### Industry Problem

- **$100B+** lost annually in cancellations  hotels alone  
- **40%** of hotel bookings are modified or cancelled
- **$50-150** average cancellation fee per booking
- **No secondary market** for transferring reservations

### Our Solution Impact

- **100%** uptime for properties  always paid  
- **+30%** extra revenue through auctions
- **Win-win** for all participants
- **Transparent** blockchain-based system

### Target Market

- **Primary:** Vacation rentals, boutique hotels, event venues
- **Secondary:** Flights, concert tickets, restaurant reservations
- **Future:** Any bookable resource with high cancellation rates

---

## 🔒 Security

### Smart Contract Security

- ✅ ReentrancyGuard on all critical functions
- ✅ Access control with Ownable pattern
- ✅ Input validation and require statements
- ✅ PYUSD-only payments  no direct ETH  
- ✅ Pausable for emergencies
- ⏳ External audit pending  OpenZeppelin/ConsenSys  

### Frontend Security

- ✅ Environment variables properly managed
- ✅ Input sanitization
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Secure WebSocket connections

### Best Practices

- Regular security audits
- Bug bounty program  coming soon  
- Transparent code  open source  
- Multi-sig for admin functions
- Time-locks for critical changes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE] LICENSE   file for details.

---

## 🙏 Acknowledgments

- **ETHGlobal** - For organizing ETHOnline 2024
- **PayPal/PYUSD** - For stablecoin integration
- **Privy** - For seamless wallet authentication
- **OpenZeppelin** - For secure smart contract libraries
- **Fetch.ai/ASI** - For AI agent technology
- **Community** - For feedback and support

---

## 📚 Additional Resources

### Documentation
- [Technical Documentation] ./docs/TECHNICAL.md  
- [Architecture Guide] ./docs/ARCHITECTURE.md  
- [Deployment Guide] ./docs/DEPLOYMENT.md  
- [Contracts README] ./contracts/README.md  
- [Frontend README] ./frontend/README.md  

### Links
- [Demo Video] https://youtube.com/...   - 5 minute walkthrough
- [Pitch Deck] https://...   - Investor presentation
- [Figma Design] https://figma.com/...   - UI/UX mockups
- [Block Explorer] https://sepolia.etherscan.io/address/0x...   - Verified contracts

### Community
- [Discord] https://discord.gg/...   - Join our community
- [Twitter] https://twitter.com/...   - Follow for updates
- [Blog] https://medium.com/@digitalhouse   - Technical articles

---

## 🎉 Built for ETHOnline 2025

**Digital House** - Revolutionizing bookings with blockchain, one reservation at a time.

[🚀 Try Demo] https://digitalhouse.vercel.app     [📺 Watch Video] https://youtube.com/...     [💬 Join Discord] https://discord.gg/...  

---

<div align="center">

Made with ❤️ by the Digital House Team

**Eliminating billions in booking losses through blockchain innovation**

</div>
