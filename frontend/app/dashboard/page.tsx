'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginButton from '@/components/auth/LoginButton';
import UserProfile from '@/components/auth/UserProfile';
import { Home, Plus, List, TrendingUp } from 'lucide-react';

/**
 * Dashboard page - requires authentication
 */
export default function DashboardPage() {
  const { authenticated, ready } = usePrivy();
  const router = useRouter();

  // Redirect to home if not authenticated
  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Home className="h-6 w-6 text-indigo-500" />
                <span className="text-xl font-bold text-white">Digital House</span>
              </div>
              <div className="hidden md:flex gap-4">
                <a href="/dashboard" className="text-white hover:text-indigo-400 transition-colors">
                  Dashboard
                </a>
                <a href="/vault" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  My Vaults
                </a>
              </div>
            </div>
            <LoginButton />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Profile */}
          <div className="lg:col-span-1">
            <UserProfile />
          </div>

          {/* Right Column - Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center gap-3 p-6 bg-indigo-900/30 hover:bg-indigo-900/50 rounded-lg transition-colors border border-indigo-800">
                  <Plus className="h-8 w-8 text-indigo-400" />
                  <div className="text-left">
                    <div className="text-white font-medium">Create Vault</div>
                    <div className="text-gray-400 text-sm">List your property</div>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-6 bg-green-900/30 hover:bg-green-900/50 rounded-lg transition-colors border border-green-800">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                  <div className="text-left">
                    <div className="text-white font-medium">Browse Auctions</div>
                    <div className="text-gray-400 text-sm">Find deals</div>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-6 bg-purple-900/30 hover:bg-purple-900/50 rounded-lg transition-colors border border-purple-800">
                  <List className="h-8 w-8 text-purple-400" />
                  <div className="text-left">
                    <div className="text-white font-medium">My Reservations</div>
                    <div className="text-gray-400 text-sm">View bookings</div>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-6 bg-blue-900/30 hover:bg-blue-900/50 rounded-lg transition-colors border border-blue-800">
                  <List className="h-8 w-8 text-blue-400" />
                  <div className="text-left">
                    <div className="text-white font-medium">My Bids</div>
                    <div className="text-gray-400 text-sm">Track offers</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="text-center py-12 text-gray-400">
                <p>No activity yet</p>
                <p className="text-sm mt-2">Create your first reservation or vault to get started!</p>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 text-sm">My Vaults</div>
                <div className="text-3xl font-bold text-white mt-2">0</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 text-sm">Reservations</div>
                <div className="text-3xl font-bold text-white mt-2">0</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 text-sm">Active Bids</div>
                <div className="text-3xl font-bold text-white mt-2">0</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 text-sm">Total Earnings</div>
                <div className="text-3xl font-bold text-white mt-2">0</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
