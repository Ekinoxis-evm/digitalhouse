import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PrivyProviderWrapper from '@/components/providers/PrivyProviderWrapper';
import { validateEnv } from '@/lib/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital House | Decentralized Booking Platform',
  description: 'Eliminating billions in losses from last-minute cancellations through blockchain auctions and PYUSD',
  keywords: ['blockchain', 'booking', 'auction', 'PYUSD', 'ethereum', 'web3'],
  authors: [{ name: 'Digital House Team' }],
  openGraph: {
    title: 'Digital House - Decentralized Booking Platform',
    description: 'Revolutionary booking system with auction mechanics',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Validate environment variables
  if (typeof window === 'undefined') {
    validateEnv();
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivyProviderWrapper>
          {children}
        </PrivyProviderWrapper>
      </body>
    </html>
  );
}
