import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format wallet address for display
 */
export function formatAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Format PYUSD amount (6 decimals)
 */
export function formatPYUSD(amount: bigint | string, decimals = 2): string {
  const value = typeof amount === 'string' ? BigInt(amount) : amount;
  const formatted = Number(value) / 1e6;
  return formatted.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Parse PYUSD amount from string
 */
export function parsePYUSD(amount: string): bigint {
  const value = parseFloat(amount);
  return BigInt(Math.floor(value * 1e6));
}

/**
 * Format timestamp to readable date
 */
export function formatDate(timestamp: number | bigint): string {
  const ms = typeof timestamp === 'bigint' ? Number(timestamp) * 1000 : timestamp * 1000;
  return new Date(ms).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format timestamp to readable date and time
 */
export function formatDateTime(timestamp: number | bigint): string {
  const ms = typeof timestamp === 'bigint' ? Number(timestamp) * 1000 : timestamp * 1000;
  return new Date(ms).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Calculate days between two dates
 */
export function daysBetween(start: number | bigint, end: number | bigint): number {
  const startMs = typeof start === 'bigint' ? Number(start) * 1000 : start * 1000;
  const endMs = typeof end === 'bigint' ? Number(end) * 1000 : end * 1000;
  return Math.ceil((endMs - startMs) / (1000 * 60 * 60 * 24));
}

/**
 * Check if date is in the past
 */
export function isPast(timestamp: number | bigint): boolean {
  const ms = typeof timestamp === 'bigint' ? Number(timestamp) * 1000 : timestamp * 1000;
  return Date.now() > ms;
}

/**
 * Get time remaining until timestamp
 */
export function timeUntil(timestamp: number | bigint): string {
  const ms = typeof timestamp === 'bigint' ? Number(timestamp) * 1000 : timestamp * 1000;
  const diff = ms - Date.now();

  if (diff < 0) return 'Expired';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}
