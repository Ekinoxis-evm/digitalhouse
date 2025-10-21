'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useCallback, useState } from 'react';
import { useSponsoredTransaction } from '@/lib/hooks/useSponsoredTransaction';
import { encodeFunctionData, parseUnits } from 'viem';
import { FACTORY_ADDRESS, PYUSD_ADDRESSES, SUPPORTED_CHAINS } from '@/lib/config';
import { Loader2, Rocket, AlertCircle } from 'lucide-react';

/**
 * Example component showing how to use gas sponsorship
 * This creates a vault with sponsored gas
 */
export default function CreateVaultButton() {
  const { authenticated } = usePrivy();
  const { sendSponsoredTransaction, isLoading, canSponsor } = useSponsoredTransaction();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCreateVault = useCallback(async () => {
    if (!canSponsor) {
      alert('Gas sponsorship not available. Please use an embedded wallet.');
      return;
    }

    try {
      setStatus('idle');

      // Example: Create vault transaction
      // In production, replace with actual ABI and contract interaction
      const vaultId = `VAULT-${Date.now()}`;
      const propertyDetails = 'Example Property';
      const basePrice = parseUnits('1000', 6); // 1000 PYUSD

      // This is a simplified example - you'll need the actual ABI
      const data = encodeFunctionData({
        abi: [
          {
            name: 'createVault',
            type: 'function',
            stateMutability: 'nonpayable',
            inputs: [
              { name: '_vaultId', type: 'string' },
              { name: '_propertyDetails', type: 'string' },
              { name: '_basePrice', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'address' }],
          },
        ],
        functionName: 'createVault',
        args: [vaultId, propertyDetails, basePrice],
      });

      // Send transaction with sponsored gas
      const txHash = await sendSponsoredTransaction({
        to: FACTORY_ADDRESS,
        data,
        chainId: SUPPORTED_CHAINS.sepolia,
      });

      console.log('✅ Vault created with sponsored gas:', txHash);
      setStatus('success');
    } catch (error) {
      console.error('❌ Failed to create vault:', error);
      setStatus('error');
    }
  }, [canSponsor, sendSponsoredTransaction]);

  if (!authenticated) {
    return null;
  }

  return (
    <div className="space-y-4">
      <button
        onClick={handleCreateVault}
        disabled={isLoading || !canSponsor}
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium transition-colors"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Creating Vault (Gas Sponsored)...</span>
          </>
        ) : (
          <>
            <Rocket className="h-5 w-5" />
            <span>Create Vault (Free Gas)</span>
          </>
        )}
      </button>

      {!canSponsor && (
        <div className="flex items-start gap-2 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg text-yellow-200 text-sm">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Gas sponsorship not available</p>
            <p className="mt-1 text-yellow-300/80">
              You need a Privy embedded wallet to use sponsored transactions.
              Please log out and create a new account with email/social login.
            </p>
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg text-green-200 text-sm">
          ✅ Vault created successfully with sponsored gas!
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-200 text-sm">
          ❌ Failed to create vault. Please try again.
        </div>
      )}
    </div>
  );
}
