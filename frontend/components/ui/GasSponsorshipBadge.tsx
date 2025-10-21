'use client';

import { useGasSponsorship } from '@/lib/hooks/useSponsoredTransaction';
import { Zap, AlertCircle, CheckCircle2 } from 'lucide-react';

/**
 * Component that shows gas sponsorship status
 */
export default function GasSponsorshipBadge() {
  const { isAvailable, walletType } = useGasSponsorship();

  if (!isAvailable) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-sm">
        <AlertCircle className="h-4 w-4 text-gray-400" />
        <span className="text-gray-400">Gas Required</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-full text-sm">
      <Zap className="h-4 w-4 text-green-400 animate-pulse" />
      <span className="text-green-300 font-medium">Gas Sponsored</span>
      <CheckCircle2 className="h-4 w-4 text-green-400" />
    </div>
  );
}

/**
 * Info panel explaining gas sponsorship
 */
export function GasSponsorshipInfo() {
  return (
    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-700/50 rounded-lg p-6 space-y-4">
      <div className="flex items-start gap-3">
        <div className="bg-indigo-900/50 p-2 rounded-lg">
          <Zap className="h-6 w-6 text-indigo-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">
            ⚡ Free Transactions with Gas Sponsorship
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Digital House sponsors gas fees for all transactions made with embedded wallets.
            This means you can create vaults, make reservations, and place bids without
            needing ETH for gas!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-900/50 rounded-lg p-4">
          <div className="text-green-400 font-medium mb-1 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Sponsored
          </div>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Create vaults</li>
            <li>• Make reservations</li>
            <li>• Place bids</li>
            <li>• Check-in/Check-out</li>
          </ul>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-4">
          <div className="text-yellow-400 font-medium mb-1 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            How to Enable
          </div>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Login with email/social</li>
            <li>• Use embedded wallet</li>
            <li>• No ETH needed!</li>
            <li>• Just PYUSD for stakes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
