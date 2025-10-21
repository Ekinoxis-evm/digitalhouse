/**
 * Type definitions for Digital House frontend
 */

export enum VaultState {
  FREE = 0,
  AUCTION = 1,
  SETTLED = 2,
}

export interface Reservation {
  booker: string;
  stakeAmount: bigint;
  shares: bigint;
  checkInDate: bigint;
  checkOutDate: bigint;
  nonce: bigint;
  isActive: boolean;
}

export interface AuctionBid {
  bidder: string;
  amount: bigint;
  timestamp: bigint;
  isActive: boolean;
}

export interface VaultInfo {
  vaultAddress: string;
  vaultId: string;
  propertyDetails: string;
  basePrice: bigint;
  createdAt: bigint;
  isActive: boolean;
}

export interface Vault {
  id: string;
  address: string;
  propertyDetails: string;
  basePrice: bigint;
  state: VaultState;
  currentNonce: bigint;
  reservation?: Reservation;
  bids?: AuctionBid[];
}

export interface UserStats {
  ownedVaults: number;
  activeReservations: number;
  activeBids: number;
  totalEarnings: bigint;
}
