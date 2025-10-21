'use client';

import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useCallback, useState } from 'react';
import { encodeFunctionData, parseUnits } from 'viem';

/**
 * Hook for sending sponsored transactions through Privy
 *
 * This hook handles gas sponsorship automatically when configured in Privy Dashboard.
 *
 * Usage:
 * ```tsx
 * const { sendSponsoredTransaction, isLoading } = useSponsoredTransaction();
 *
 * await sendSponsoredTransaction({
 *   to: contractAddress,
 *   data: encodedFunctionCall,
 *   value: 0n,
 * });
 * ```
 */
export function useSponsoredTransaction() {
  const { authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const embeddedWallet = wallets.find(
    (wallet) => wallet.walletClientType === 'privy'
  );

  const sendSponsoredTransaction = useCallback(
    async ({
      to,
      data,
      value = 0n,
      chainId,
    }: {
      to: string;
      data: `0x${string}`;
      value?: bigint;
      chainId?: number;
    }) => {
      if (!authenticated) {
        throw new Error('User not authenticated');
      }

      if (!embeddedWallet) {
        throw new Error('No embedded wallet found. User must have a Privy wallet.');
      }

      setIsLoading(true);
      setError(null);

      try {
        // Switch to the correct chain if specified
        if (chainId && embeddedWallet.chainId !== `eip155:${chainId}`) {
          await embeddedWallet.switchChain(chainId);
        }

        // Get the wallet provider
        const provider = await embeddedWallet.getEthereumProvider();

        // Send transaction
        // If gas sponsorship is configured in Privy Dashboard, it will be applied automatically
        const txHash = await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: embeddedWallet.address,
              to,
              data,
              value: `0x${value.toString(16)}`,
            },
          ],
        });

        console.log('✅ Transaction sent:', txHash);
        return txHash as string;
      } catch (err) {
        const error = err as Error;
        console.error('❌ Transaction failed:', error);
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [authenticated, embeddedWallet]
  );

  return {
    sendSponsoredTransaction,
    isLoading,
    error,
    canSponsor: !!embeddedWallet,
    embeddedWallet,
  };
}

/**
 * Hook for checking if gas sponsorship is available
 */
export function useGasSponsorship() {
  const { wallets } = useWallets();

  const embeddedWallet = wallets.find(
    (wallet) => wallet.walletClientType === 'privy'
  );

  return {
    isAvailable: !!embeddedWallet,
    walletAddress: embeddedWallet?.address,
    walletType: embeddedWallet?.walletClientType,
  };
}
