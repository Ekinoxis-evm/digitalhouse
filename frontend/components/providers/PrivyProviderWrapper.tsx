'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { sepolia, arbitrumSepolia, baseSepolia } from 'viem/chains';
import { http } from 'viem';
import { createConfig } from 'wagmi';
import { PRIVY_CONFIG, DEFAULT_CHAIN_ID } from '@/lib/config';
import { supportedChains } from '@/lib/chains';

/**
 * Wagmi configuration for ETH Online 2024 testnets
 */
const wagmiConfig = createConfig({
  chains: [sepolia, arbitrumSepolia, baseSepolia],
  transports: {
    [sepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
    [baseSepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

interface PrivyProviderWrapperProps {
  children: React.ReactNode;
}

/**
 * Privy Provider configured for ETH Online 2024
 * Supports Sepolia, Arbitrum Sepolia, and Base Sepolia testnets
 */
export default function PrivyProviderWrapper({ children }: PrivyProviderWrapperProps) {
  // Validate configuration on mount
  if (typeof window !== 'undefined') {
    if (!PRIVY_CONFIG.appId || !PRIVY_CONFIG.clientId) {
      console.error(
        '⚠️ Missing Privy configuration. Please set NEXT_PUBLIC_PRIVY_APP_ID and NEXT_PUBLIC_PRIVY_CLIENT_ID'
      );
    }
  }

  return (
    <PrivyProvider
      appId={PRIVY_CONFIG.appId}
      clientId={PRIVY_CONFIG.clientId}
      config={{
        // Appearance customization
        appearance: {
          theme: 'dark',
          accentColor: '#6366F1',
          logo: '/logo.png',
          showWalletLoginFirst: true,
        },
        // Login methods
        loginMethods: ['wallet', 'email', 'google', 'twitter'],
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
          requireUserPasswordOnCreate: false,
        },
        // Supported chains for ETH Online 2024
        supportedChains: supportedChains,
        defaultChain: supportedChains.find((chain) => chain.id === DEFAULT_CHAIN_ID) || sepolia,
        // Legal and privacy
        legal: {
          termsAndConditionsUrl: 'https://digitalhouse.io/terms',
          privacyPolicyUrl: 'https://digitalhouse.io/privacy',
        },
        // Wallet configuration
        mfa: {
          noPromptOnMfaRequired: false,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
