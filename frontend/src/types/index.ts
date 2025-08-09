export interface User {
  address: string
  balance: string
  ensName?: string
}

export interface Token {
  address: string
  symbol: string
  name: string
  decimals: number
  balance: string
  price?: number
}

export interface Task {
  id: string
  title: string
  description: string
  reward: string
  status: 'pending' | 'completed' | 'claimed'
  type: 'tweet' | 'stake' | 'vote' | 'referral'
  requirements?: {
    minAmount?: string
    duration?: number
    url?: string
  }
}

export interface Proposal {
  id: string
  title: string
  description: string
  proposer: string
  status: 'active' | 'succeeded' | 'defeated' | 'executed'
  votesFor: string
  votesAgainst: string
  endTime: number
  executionTime?: number
}

export interface Transaction {
  hash: string
  type: 'transfer' | 'stake' | 'vote' | 'claim'
  amount?: string
  to?: string
  from?: string
  timestamp: bigint
  status: 'pending' | 'confirmed' | 'failed'
}

export interface NetworkConfig {
  chainId: number
  name: string
  rpcUrl: string
  explorerUrl: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
}