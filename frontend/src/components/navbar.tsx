import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { WalletButton } from '@/components/wallet-button'
import { Coins, TrendingUp, Layers, PiggyBank, Palette, Building2, Search } from 'lucide-react'
import Logo from "@/components/logo.tsx";

export function Navbar() {
  return (
    <nav className="border-b border-purple-200/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3 w-36">
              <Logo/>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-1">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>仪表板</span>
                </Button>
              </Link>
              <Link to="/tokens">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Coins className="w-4 h-4" />
                  <span>代币管理</span>
                </Button>
              </Link>
              <Link to="/trading">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>交易中心</span>
                </Button>
              </Link>
              <Link to="/staking">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <PiggyBank className="w-4 h-4" />
                  <span>质押挖矿</span>
                </Button>
              </Link>
              <Link to="/nfts">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Palette className="w-4 h-4" />
                  <span>NFT市场</span>
                </Button>
              </Link>
              <Link to="/defi">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Layers className="w-4 h-4" />
                  <span>DeFi协议</span>
                </Button>
              </Link>
              <Link to="/explorer">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <span>区块浏览器</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  )
}