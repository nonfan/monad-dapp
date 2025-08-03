import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Coins, TrendingUp, PiggyBank, Palette, Layers, Search, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Monad 演示
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              体验下一代高性能区块链的全部功能
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              探索代币管理、DeFi 协议、NFT 市场等丰富生态
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg">
              开始探索
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              查看文档
            </Button>
          </div>
        </div>

        {/* 核心功能 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/tokens">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Coins className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">代币管理</CardTitle>
                <CardDescription className="text-base">
                  铸造、转账、销毁代币，体验完整的代币生命周期管理
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link to="/trading">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">交易中心</CardTitle>
                <CardDescription className="text-base">
                  高速低费用的现货交易、代币兑换和限价订单
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link to="/staking">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <PiggyBank className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">质押挖矿</CardTitle>
                <CardDescription className="text-base">
                  质押 MON 代币获得稳定收益，参与网络治理
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link to="/nfts">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">NFT 市场</CardTitle>
                <CardDescription className="text-base">
                  发现、创建和交易独特的数字艺术品和收藏品
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link to="/defi">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">DeFi 协议</CardTitle>
                <CardDescription className="text-base">
                  探索去中心化金融生态，享受创新金融服务
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link to="/explorer">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">区块浏览器</CardTitle>
                <CardDescription className="text-base">
                  探索区块、交易和地址，透明查看链上数据
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Monad 特性 */}
        <Card className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border-purple-200">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl mb-4">为什么选择 Monad？</CardTitle>
            <CardDescription className="text-lg">
              Monad 是专为高性能和用户体验而设计的新一代区块链
            </CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">超高性能</h3>
                <p className="text-gray-600">每秒处理数万笔交易，亚秒级确认时间</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">超低费用</h3>
                <p className="text-gray-600">极低的交易成本，让每个人都能参与</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🔗</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">EVM 兼容</h3>
                <p className="text-gray-600">完全兼容以太坊，无缝迁移现有应用</p>
              </div>
            </div>
          </div>
        </Card>

        {/* 开始使用 */}
        <div className="text-center space-y-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold">准备好开始了吗？</h2>
          <p className="text-xl opacity-90">
            连接您的钱包，立即体验 Monad 网络的强大功能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              连接钱包
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-purple-600">
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}