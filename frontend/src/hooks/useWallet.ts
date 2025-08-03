import { useState, useEffect } from 'react'

interface WalletState {
  address: string | null
  isConnected: boolean
  chainId: number | null
}

declare global {
  interface Window {
    ethereum?: any
  }
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    isConnected: false,
    chainId: null,
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      checkConnection()
      
      window.ethereum.on('accountsChanged', handleAccountsChanged)
      window.ethereum.on('chainChanged', handleChainChanged)
      
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
        window.ethereum.removeListener('chainChanged', handleChainChanged)
      }
    }
  }, [])

  const checkConnection = async () => {
    if (!window.ethereum) return

    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      const chainId = await window.ethereum.request({ method: 'eth_chainId' })
      
      if (accounts.length > 0) {
        setWalletState({
          address: accounts[0],
          isConnected: true,
          chainId: parseInt(chainId, 16),
        })
      }
    } catch (error) {
      console.error('检查钱包连接错误:', error)
    }
  }

  const connect = async () => {
    if (!window.ethereum) {
      alert('请安装 MetaMask 或其他 Web3 钱包')
      return
    }

    setIsLoading(true)
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      
      const chainId = await window.ethereum.request({ method: 'eth_chainId' })
      
      setWalletState({
        address: accounts[0],
        isConnected: true,
        chainId: parseInt(chainId, 16),
      })
    } catch (error) {
      console.error('钱包连接错误:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const disconnect = () => {
    setWalletState({
      address: null,
      isConnected: false,
      chainId: null,
    })
  }

  const switchNetwork = async (chainId: number) => {
    if (!window.ethereum) return

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      })
    } catch (error: any) {
      if (error.code === 4902) {
        // Network not added, add it
        await addNetwork(chainId)
      } else {
        throw error
      }
    }
  }

  const addNetwork = async (chainId: number) => {
    if (!window.ethereum) return

    const networkParams = {
      chainId: `0x${chainId.toString(16)}`,
      chainName: 'Monad Network',
      nativeCurrency: {
        name: 'Monad',
        symbol: 'MON',
        decimals: 18,
      },
      rpcUrls: [process.env.NEXT_PUBLIC_MONAD_RPC_URL || 'https://rpc.monad.xyz'],
      blockExplorerUrls: [process.env.NEXT_PUBLIC_MONAD_EXPLORER_URL || 'https://explorer.monad.xyz'],
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [networkParams],
      })
    } catch (error) {
      console.error('添加网络错误:', error)
      throw error
    }
  }

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnect()
    } else {
      setWalletState(prev => ({
        ...prev,
        address: accounts[0],
        isConnected: true,
      }))
    }
  }

  const handleChainChanged = (chainId: string) => {
    setWalletState(prev => ({
      ...prev,
      chainId: parseInt(chainId, 16),
    }))
  }

  return {
    ...walletState,
    isLoading,
    connect,
    disconnect,
    switchNetwork,
    addNetwork,
  }
}