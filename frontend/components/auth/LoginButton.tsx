'use client';

import { usePrivy } from '@privy-io/react-auth';
import { LogIn, LogOut, Wallet } from 'lucide-react';

/**
 * Login/Logout button component
 * Handles Privy authentication flow
 */
export default function LoginButton() {
  const { ready, authenticated, login, logout, user } = usePrivy();

  // Show loading state while Privy is initializing
  if (!ready) {
    return (
      <button
        disabled
        className="px-4 py-2 rounded-lg bg-gray-700 text-gray-400 cursor-not-allowed"
      >
        Loading...
      </button>
    );
  }

  // User is authenticated - show logout button
  if (authenticated && user) {
    return (
      <div className="flex items-center gap-3">
        {/* User info */}
        <div className="hidden md:flex flex-col items-end">
          <span className="text-sm font-medium text-white">
            {user.email?.address ||
             user.google?.email ||
             user.twitter?.username ||
             'User'}
          </span>
          {user.wallet?.address && (
            <span className="text-xs text-gray-400">
              {user.wallet.address.slice(0, 6)}...{user.wallet.address.slice(-4)}
            </span>
          )}
        </div>

        {/* Logout button */}
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    );
  }

  // User is not authenticated - show login button
  return (
    <button
      onClick={login}
      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-lg hover:shadow-xl"
    >
      <Wallet className="h-5 w-5" />
      <span>Connect Wallet</span>
    </button>
  );
}
