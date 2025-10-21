# Digital House - Frontend

Next.js 14 frontend application for Digital House with Privy authentication, Web3 integration, and **Gas Sponsorship** for free transactions.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Privy account (get your App ID from [dashboard.privy.io](https://dashboard.privy.io/))
- Deployed smart contracts (see `../contracts/`)

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Configure environment variables:**

Create a `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Privy (Required) - Get from https://dashboard.privy.io/
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_PRIVY_CLIENT_ID=your_privy_client_id

# Smart Contracts (Required)
NEXT_PUBLIC_FACTORY_ADDRESS=0x_your_deployed_factory_address

# PYUSD Addresses (Pre-configured for ETH Online 2024)
NEXT_PUBLIC_PYUSD_SEPOLIA=0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9
NEXT_PUBLIC_PYUSD_ARBITRUM_SEPOLIA=0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1
```

3. **Run development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
frontend/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with Privy
│   ├── page.tsx                 # Landing page
│   ├── globals.css              # Global styles
│   └── dashboard/               # Dashboard pages
│       └── page.tsx
│
├── components/                   # React components
│   ├── auth/                    # Authentication components
│   │   ├── LoginButton.tsx
│   │   └── UserProfile.tsx
│   ├── providers/               # Context providers
│   │   └── PrivyProviderWrapper.tsx
│   ├── layout/                  # Layout components
│   ├── vault/                   # Vault-related components
│   └── ui/                      # Reusable UI components
│
├── lib/                          # Utility libraries
│   ├── config.ts                # App configuration
│   ├── chains.ts                # Chain definitions
│   └── utils.ts                 # Helper functions
│
├── types/                        # TypeScript types
│   └── index.ts
│
├── public/                       # Static assets
├── styles/                       # Additional styles
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json
```

## 🔧 Configuration

### Privy Setup

1. **Create Privy App:**
   - Go to [dashboard.privy.io](https://dashboard.privy.io/)
   - Create a new app
   - Copy your App ID and Client ID

2. **Configure Networks:**
   - In Privy dashboard, enable these testnets:
     - Ethereum Sepolia (Chain ID: 11155111)
     - Arbitrum Sepolia (Chain ID: 421614)
     - Base Sepolia (Chain ID: 84532)

3. **Configure Login Methods:**
   - Enable: Wallet, Email, Google, Twitter
   - Enable embedded wallets for users without wallets

### Supported Networks (ETH Online 2024)

- **Ethereum Sepolia** (11155111)
- **Arbitrum Sepolia** (421614)
- **Base Sepolia** (84532)

All networks are pre-configured in `lib/chains.ts`.

## 🎨 Features

### Authentication
- ✅ Privy authentication with multiple login methods
- ✅ Embedded wallets for Web2 users
- ✅ Wallet connection with MetaMask, WalletConnect, etc.
- ✅ Social login (Google, Twitter, Email)

### Web3 Integration
- ✅ Wagmi hooks for contract interactions
- ✅ Viem for type-safe contract calls
- ✅ Multi-chain support
- ✅ PYUSD token integration

### UI/UX
- ✅ Dark mode by default
- ✅ Responsive design (mobile-first)
- ✅ Tailwind CSS for styling
- ✅ Loading states and error handling

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌐 Pages

### `/` - Landing Page
- Hero section with product overview
- Feature highlights
- How it works section
- Connect wallet CTA

### `/dashboard` - User Dashboard
- User profile and wallet info
- Quick actions (Create Vault, Browse Auctions, etc.)
- Recent activity feed
- Stats overview

### `/vault` - Vault Management (Coming Soon)
- Create new vaults
- Manage existing vaults
- View reservations and bids

## 🔗 Integration with Smart Contracts

The frontend integrates with the Digital House smart contracts:

1. **DigitalHouseFactory**: Create and manage vaults
2. **DigitalHouseVault**: Handle reservations, bids, check-in/out

Contract ABIs and type-safe interfaces will be generated from the `../contracts/` directory.

## 🎯 Next Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get Privy credentials:**
   - Create account at [dashboard.privy.io](https://dashboard.privy.io/)
   - Create new app
   - Get App ID and Client ID

3. **Deploy contracts:**
   ```bash
   cd ../contracts
   npm run deploy:sepolia
   ```

4. **Configure environment:**
   - Copy `.env.example` to `.env.local`
   - Add your Privy credentials
   - Add deployed contract addresses

5. **Run development server:**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configure environment variables in Vercel dashboard:**
   - Add all variables from `.env.local`

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Environment Variables for Production

Ensure these are set in your deployment platform:
- `NEXT_PUBLIC_PRIVY_APP_ID`
- `NEXT_PUBLIC_PRIVY_CLIENT_ID`
- `NEXT_PUBLIC_FACTORY_ADDRESS`
- `NEXT_PUBLIC_PYUSD_SEPOLIA`
- `NEXT_PUBLIC_PYUSD_ARBITRUM_SEPOLIA`

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Privy
- **Web3:** Wagmi, Viem, Ethers.js
- **State:** React Query
- **Icons:** Lucide React

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Privy Documentation](https://docs.privy.io/)
- [Wagmi Documentation](https://wagmi.sh/)
- [Viem Documentation](https://viem.sh/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🐛 Troubleshooting

### Privy not loading
- Check that App ID and Client ID are correct
- Verify environment variables are set
- Check browser console for errors

### Wallet connection issues
- Ensure you're on a supported network
- Check MetaMask/wallet is unlocked
- Clear browser cache and cookies

### Build errors
- Run `npm run type-check` to find TypeScript errors
- Delete `.next` folder and rebuild
- Check all environment variables are set

## 📝 License

MIT License - see [LICENSE](../LICENSE) for details.
