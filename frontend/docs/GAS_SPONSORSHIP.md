# Gas Sponsorship Configuration Guide

## 🚀 Overview

Digital House uses **Privy's Gas Sponsorship** to sponsor gas fees for users' transactions. This provides a seamless Web2-like experience where users don't need to worry about gas fees.

## 🎯 What Gets Sponsored

When properly configured, these transactions can be sponsored:

- ✅ Creating vaults
- ✅ Making reservations
- ✅ Placing bids
- ✅ Ceding reservations
- ✅ Check-in/Check-out operations
- ✅ Any contract interaction

## 📋 Prerequisites

- Privy account with app created
- Access to [Privy Dashboard](https://dashboard.privy.io/)
- Embedded wallets enabled in your app
- Credit card on file (for production use)

## 🔧 Setup Instructions

### 1. Enable Gas Sponsorship in Privy Dashboard

1. **Navigate to your app in Privy Dashboard:**
   - Go to [dashboard.privy.io](https://dashboard.privy.io/)
   - Select your Digital House app

2. **Go to Gas & Asset Management:**
   - Click on "Settings" in the left sidebar
   - Navigate to "Gas & Asset Management"
   - Click "Enable Gas Sponsorship"

3. **Configure Gas Policies:**
   - Click "Create Policy"
   - Select the chains you want to sponsor:
     - ✅ Ethereum Sepolia (11155111)
     - ✅ Arbitrum Sepolia (421614)
     - ✅ Base Sepolia (84532)

4. **Set Spending Limits (Optional but Recommended):**
   ```
   Per Transaction: 0.01 ETH (or your preferred limit)
   Daily Limit: 1 ETH
   Monthly Limit: 10 ETH
   ```

5. **Configure Contract Allowlist:**
   - Add your deployed contract addresses:
     ```
     DigitalHouseFactory: 0x_your_factory_address
     ```
   - Or allow all contracts (not recommended for production)

6. **Save and Activate:**
   - Review your settings
   - Click "Save Policy"
   - Toggle "Active" to enable

### 2. Configure in Your App

The gas sponsorship is already configured in the code. No additional changes needed!

```typescript
// Already configured in PrivyProviderWrapper.tsx
<PrivyProvider
  appId={PRIVY_CONFIG.appId}
  clientId={PRIVY_CONFIG.clientId}
  config={{
    embeddedWallets: {
      createOnLogin: 'users-without-wallets',
    },
    // Gas sponsorship works automatically with embedded wallets
  }}
/>
```

### 3. Using Gas Sponsorship in Components

Use the `useSponsoredTransaction` hook:

```typescript
import { useSponsoredTransaction } from '@/lib/hooks/useSponsoredTransaction';

function MyComponent() {
  const { sendSponsoredTransaction, isLoading, canSponsor } = useSponsoredTransaction();

  const handleTransaction = async () => {
    const txHash = await sendSponsoredTransaction({
      to: contractAddress,
      data: encodedFunctionCall,
      chainId: 11155111, // Sepolia
    });

    console.log('Transaction sent:', txHash);
  };

  return (
    <button onClick={handleTransaction} disabled={!canSponsor || isLoading}>
      {canSponsor ? 'Send (Free Gas)' : 'Send (Gas Required)'}
    </button>
  );
}
```

## 💡 How It Works

### For Users with Embedded Wallets (Email/Social Login)

1. User logs in with email/social
2. Privy creates an embedded wallet automatically
3. User initiates a transaction (e.g., create vault)
4. **Gas is automatically sponsored by Digital House**
5. Transaction completes without user paying gas
6. User only needs PYUSD for stakes, not ETH for gas!

### For Users with External Wallets (MetaMask, etc.)

- Gas sponsorship is **NOT available**
- Users must have ETH in their wallet for gas
- This is a Privy limitation - sponsorship only works with embedded wallets

## 📊 Monitoring Usage

### Privy Dashboard

1. Go to "Analytics" → "Gas Sponsorship"
2. View:
   - Total gas spent
   - Transactions sponsored
   - Cost per chain
   - Daily/monthly trends

### In Your App

```typescript
// Check if sponsorship is available
const { isAvailable, walletType } = useGasSponsorship();

if (isAvailable) {
  console.log('✅ Gas sponsorship available');
} else {
  console.log('⚠️ User needs embedded wallet for sponsorship');
}
```

## 💰 Costs & Billing

### Testnet (Free)

- Gas sponsorship on testnets (Sepolia, Arbitrum Sepolia, Base Sepolia) is **FREE**
- No credit card required for testing
- Perfect for ETH Online 2024 hackathon!

### Mainnet (Production)

When you're ready to go to production:

1. **Add Payment Method:**
   - Go to Privy Dashboard → Billing
   - Add credit card

2. **Costs:**
   - Pay only for actual gas used
   - Privy charges gas cost + small fee
   - Typical costs:
     - Simple transaction: ~$0.10-$0.50
     - Complex contract call: ~$1-$5

3. **Set Budgets:**
   - Configure spending limits to control costs
   - Get alerts when approaching limits

## 🛡️ Security Best Practices

### Contract Allowlist

**Always use a contract allowlist in production:**

```
Allowed Contracts:
- DigitalHouseFactory: 0xYourFactoryAddress
- DigitalHouseVault: 0xYourVaultTemplate (if applicable)
```

This prevents:
- Users calling arbitrary contracts with your sponsored gas
- Abuse of gas sponsorship feature
- Unexpected costs

### Spending Limits

**Set reasonable limits:**

```
Per Transaction: 0.01 ETH (prevents single large transaction)
Per User Daily: 0.1 ETH (prevents abuse by single user)
Total Daily: 1 ETH (overall safety net)
Total Monthly: 10 ETH (budget control)
```

### Monitoring

**Set up alerts:**
- Email when 50% of daily limit reached
- Email when 80% of monthly limit reached
- Slack integration for real-time monitoring

## 🧪 Testing Gas Sponsorship

### 1. Test in Development

```bash
cd frontend
npm run dev
```

### 2. Create Test User

1. Open http://localhost:3000
2. Click "Connect Wallet"
3. Choose "Email" or "Google" (NOT external wallet)
4. Complete login flow
5. Privy creates embedded wallet automatically

### 3. Trigger Sponsored Transaction

1. Go to Dashboard
2. Click "Create Vault" (or any other action)
3. Check browser console for logs:
   ```
   ✅ Gas sponsorship available
   ✅ Transaction sent: 0x123...
   ```

### 4. Verify in Privy Dashboard

1. Go to Dashboard → Analytics → Gas Sponsorship
2. Should see the transaction listed
3. Verify gas was sponsored (cost = $0 for testnet)

## 🎓 Example Usage

### Complete Example: Create Vault with Sponsored Gas

```typescript
'use client';

import { useSponsoredTransaction } from '@/lib/hooks/useSponsoredTransaction';
import { encodeFunctionData, parseUnits } from 'viem';
import { FACTORY_ADDRESS } from '@/lib/config';

export default function CreateVaultExample() {
  const { sendSponsoredTransaction, isLoading, canSponsor } = useSponsoredTransaction();

  const createVault = async () => {
    if (!canSponsor) {
      alert('Please use email/social login for gas sponsorship');
      return;
    }

    try {
      // Encode function call
      const data = encodeFunctionData({
        abi: FactoryABI,
        functionName: 'createVault',
        args: ['VAULT-001', 'My Property', parseUnits('1000', 6)],
      });

      // Send transaction with sponsored gas
      const txHash = await sendSponsoredTransaction({
        to: FACTORY_ADDRESS,
        data,
        chainId: 11155111, // Sepolia
      });

      console.log('✅ Vault created! TX:', txHash);
    } catch (error) {
      console.error('❌ Error:', error);
    }
  };

  return (
    <div>
      <button onClick={createVault} disabled={!canSponsor || isLoading}>
        {isLoading ? 'Creating...' : 'Create Vault (Free Gas)'}
      </button>

      {!canSponsor && (
        <p>⚠️ Gas sponsorship not available. Login with email/social.</p>
      )}
    </div>
  );
}
```

## 🚨 Troubleshooting

### Gas Not Being Sponsored

**Check:**
1. User logged in with email/social (not external wallet)
2. Embedded wallet created (check in Privy dashboard)
3. Gas policy is active in dashboard
4. Contract address is in allowlist
5. Transaction is on a supported chain

### Transaction Failing

**Common issues:**
1. Spending limit reached → Increase limits in dashboard
2. Contract not allowlisted → Add to allowlist
3. Chain not supported → Enable in gas policy
4. Insufficient PYUSD → User needs tokens for stake (not gas)

### Monitoring Shows No Data

**Verify:**
1. Wait 5-10 minutes for dashboard to update
2. Check correct environment (testnet vs mainnet)
3. Ensure transactions actually sent
4. Check browser console for errors

## 📚 Additional Resources

- [Privy Gas Sponsorship Docs](https://docs.privy.io/wallets/gas-and-asset-management/gas/overview)
- [Privy Dashboard](https://dashboard.privy.io/)
- [Privy Discord Support](https://discord.gg/privy)

## ✅ Checklist for Production

Before launching on mainnet:

- [ ] Gas sponsorship enabled in Privy dashboard
- [ ] Payment method added
- [ ] Spending limits configured
- [ ] Contract allowlist set up
- [ ] Alerts configured
- [ ] Tested with real users
- [ ] Monitoring dashboard set up
- [ ] Budget allocated for gas costs
- [ ] Team trained on monitoring and limits

---

**Questions?** Check the [Privy documentation](https://docs.privy.io/) or reach out to their support team.
