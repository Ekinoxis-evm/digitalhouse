'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginButton from '@/components/auth/LoginButton';
import { Home, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

/**
 * Landing page for Digital House
 * Redirects authenticated users to dashboard
 */
export default function HomePage() {
  const { authenticated, ready } = usePrivy();
  const router = useRouter();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (ready && authenticated) {
      router.push('/dashboard');
    }
  }, [ready, authenticated, router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-8 w-8 text-indigo-500" />
            <span className="text-2xl font-bold text-white">Digital House</span>
          </div>
          <LoginButton />
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-900/50 rounded-full text-indigo-300 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            ETH Online 2024
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Decentralized Booking
            <br />
            <span className="gradient-text">With Auction Power</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Eliminating billions in losses from last-minute cancellations through blockchain auctions and PYUSD
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <LoginButton />
            <a
              href="#features"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
              <div className="text-4xl font-bold text-indigo-400">$100B+</div>
              <div className="text-gray-400 mt-2">Lost in Cancellations</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
              <div className="text-4xl font-bold text-indigo-400">40%</div>
              <div className="text-gray-400 mt-2">Bookings Modified</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
              <div className="text-4xl font-bold text-indigo-400">100%</div>
              <div className="text-gray-400 mt-2">Property Uptime</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-32 space-y-16">
          <h2 className="text-4xl font-bold text-white text-center">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 rounded-xl p-8 space-y-4 hover:bg-gray-700 transition-colors">
              <div className="bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Auction System</h3>
              <p className="text-gray-400">
                Secondary market for reservations with competitive bidding and fair value distribution
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 rounded-xl p-8 space-y-4 hover:bg-gray-700 transition-colors">
              <div className="bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">PYUSD Staking</h3>
              <p className="text-gray-400">
                Secure reservations with PayPal USD stablecoin, ensuring price stability
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 rounded-xl p-8 space-y-4 hover:bg-gray-700 transition-colors">
              <div className="bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Smart Contracts</h3>
              <p className="text-gray-400">
                Automated logic, transparent transactions, and trustless execution on-chain
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-32 space-y-8">
          <h2 className="text-4xl font-bold text-white text-center">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-white">Create Reservation:</span> Stake PYUSD to secure your booking
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-white">Auction Period:</span> Others can bid to take over your reservation
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-white">Decide:</span> Keep your booking or cede for profit (30% of additional value)
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-white">Check-In:</span> Get on-chain access code and enjoy your stay
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-32 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>Built for ETH Online 2024</p>
          <p className="mt-2">Made with ❤️ by the Digital House Team</p>
        </div>
      </footer>
    </div>
  );
}
