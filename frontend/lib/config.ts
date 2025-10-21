// Network configuration for ETH Online 2024
export const SUPPORTED_CHAINS = {
  sepolia: 11155111,
  arbitrumSepolia: 421614,
  baseSepolia: 84532,
} as const;

export const PYUSD_ADDRESSES = {
  [SUPPORTED_CHAINS.sepolia]: process.env.NEXT_PUBLIC_PYUSD_SEPOLIA || '0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9',
  [SUPPORTED_CHAINS.arbitrumSepolia]: process.env.NEXT_PUBLIC_PYUSD_ARBITRUM_SEPOLIA || '0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1',
  [SUPPORTED_CHAINS.baseSepolia]: process.env.NEXT_PUBLIC_PYUSD_BASE_SEPOLIA || '',
} as const;

export const FACTORY_ADDRESS = process.env.NEXT_PUBLIC_FACTORY_ADDRESS || '';

export const DEFAULT_CHAIN_ID = Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID) || SUPPORTED_CHAINS.sepolia;

// Privy configuration
export const PRIVY_CONFIG = {
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID || '',
  clientId: process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID || '',
};

// Validate environment variables
export function validateEnv() {
  if (!PRIVY_CONFIG.appId) {
    console.warn('⚠️ NEXT_PUBLIC_PRIVY_APP_ID is not set');
  }
  if (!PRIVY_CONFIG.clientId) {
    console.warn('⚠️ NEXT_PUBLIC_PRIVY_CLIENT_ID is not set');
  }
  if (!FACTORY_ADDRESS) {
    console.warn('⚠️ NEXT_PUBLIC_FACTORY_ADDRESS is not set');
  }
}
