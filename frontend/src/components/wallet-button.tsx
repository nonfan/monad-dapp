import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { formatAddress } from '@/lib/utils'
import { useWallet } from '@/hooks/useWallet'

export function WalletButton() {
  const { address, isConnected, connect, disconnect } = useWallet()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      await connect()
    } catch (error) {
      console.error('钱包连接失败:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center space-x-2">
        <div className="hidden sm:block text-sm text-muted-foreground">
          {formatAddress(address)}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={disconnect}
        >
          断开连接
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleConnect}
      disabled={isConnecting}
      className="bg-gradient-to-r from-monad-primary to-monad-secondary hover:from-monad-primary/90 hover:to-monad-secondary/90"
    >
      {isConnecting ? '连接中...' : '连接钱包'}
    </Button>
  )
}