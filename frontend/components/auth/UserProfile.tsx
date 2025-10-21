'use client';

import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';
import { Wallet, Mail, Twitter, Chrome, Copy, Check } from 'lucide-react';
import { getChainMetadata } from '@/lib/chains';

/**
 * User profile component showing wallet and account details
 */
export default function UserProfile() {
  const { user, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState<string>('0');

  const primaryWallet = wallets[0];

  // Copy address to clipboard
  const copyAddress = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get wallet balance (simplified)
  useEffect(() => {
    if (primaryWallet?.address) {
      // In production, fetch actual balance using viem/ethers
      setBalance('0.0');
    }
  }, [primaryWallet]);

  if (!authenticated || !user) {
    return null;
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-white">Your Profile</h2>

      {/* Wallet Information */}
      {primaryWallet && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <Wallet className="h-5 w-5 text-indigo-400" />
            <span className="font-medium">Wallet</span>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 space-y-3">
            {/* Address */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Address</span>
              <button
                onClick={() => copyAddress(primaryWallet.address)}
                className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
              >
                <span className="font-mono text-sm">
                  {primaryWallet.address.slice(0, 6)}...{primaryWallet.address.slice(-4)}
                </span>
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Chain */}
            {primaryWallet.chainId && (
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Network</span>
                <span className="text-white text-sm">
                  {getChainMetadata(Number(primaryWallet.chainId.split(':')[1]))?.name || 'Unknown'}
                </span>
              </div>
            )}

            {/* Wallet Type */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Type</span>
              <span className="text-white text-sm capitalize">
                {primaryWallet.walletClientType}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Login Methods */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-white">
          <Chrome className="h-5 w-5 text-indigo-400" />
          <span className="font-medium">Connected Accounts</span>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 space-y-2">
          {/* Email */}
          {user.email && (
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-white">{user.email.address}</span>
            </div>
          )}

          {/* Google */}
          {user.google && (
            <div className="flex items-center gap-2 text-sm">
              <Chrome className="h-4 w-4 text-gray-400" />
              <span className="text-white">{user.google.email}</span>
            </div>
          )}

          {/* Twitter */}
          {user.twitter && (
            <div className="flex items-center gap-2 text-sm">
              <Twitter className="h-4 w-4 text-gray-400" />
              <span className="text-white">@{user.twitter.username}</span>
            </div>
          )}

          {!user.email && !user.google && !user.twitter && (
            <p className="text-gray-400 text-sm">No linked accounts</p>
          )}
        </div>
      </div>
    </div>
  );
}
