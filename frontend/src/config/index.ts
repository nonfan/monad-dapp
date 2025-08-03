import { NetworkConfig } from '@/types'

export const MONAD_NETWORK: NetworkConfig = {
  chainId: 1,
  name: 'Monad',
  rpcUrl: process.env.NEXT_PUBLIC_MONAD_RPC_URL || 'https://rpc.monad.xyz',
  explorerUrl: process.env.NEXT_PUBLIC_MONAD_EXPLORER_URL || 'https://explorer.monad.xyz',
  nativeCurrency: {
    name: 'Monad',
    symbol: 'MON',
    decimals: 18,
  },
}

export const CONTRACT_ADDRESSES = {
  TOKEN: process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS || '',
  REWARD_MANAGER: process.env.NEXT_PUBLIC_REWARD_MANAGER_CONTRACT_ADDRESS || '',
  GOVERNANCE: process.env.NEXT_PUBLIC_GOVERNANCE_CONTRACT_ADDRESS || '',
}

export const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api'