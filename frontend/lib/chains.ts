import { Chain } from 'viem';
import { sepolia, arbitrumSepolia, baseSepolia } from 'viem/chains';

/**
 * Supported chains for ETH Online 2024
 * All testnets for development and hackathon participation
 */
export const supportedChains: Chain[] = [
  sepolia,
  arbitrumSepolia,
  baseSepolia,
];

/**
 * Chain metadata for UI display
 */
export const chainMetadata = {
  [sepolia.id]: {
    name: 'Ethereum Sepolia',
    shortName: 'Sepolia',
    icon: '🔷',
    color: '#627EEA',
    explorerUrl: 'https://sepolia.etherscan.io',
  },
  [arbitrumSepolia.id]: {
    name: 'Arbitrum Sepolia',
    shortName: 'Arb Sepolia',
    icon: '🔵',
    color: '#28A0F0',
    explorerUrl: 'https://sepolia.arbiscan.io',
  },
  [baseSepolia.id]: {
    name: 'Base Sepolia',
    shortName: 'Base Sepolia',
    icon: '🔵',
    color: '#0052FF',
    explorerUrl: 'https://sepolia.basescan.org',
  },
};

/**
 * Get chain by ID
 */
export function getChainById(chainId: number): Chain | undefined {
  return supportedChains.find((chain) => chain.id === chainId);
}

/**
 * Get chain metadata by ID
 */
export function getChainMetadata(chainId: number) {
  return chainMetadata[chainId as keyof typeof chainMetadata];
}
