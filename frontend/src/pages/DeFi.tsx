import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Layers, Lock, TrendingUp, Coins, Users, Shield } from 'lucide-react'

export function DeFi() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            DeFi 协议
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索 Monad 网络上的去中心化金融生态系统
          </p>
        </div>

        {/* DeFi 统计 */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总锁定价值</CardTitle>
              <Lock className="h-4 w-4 text-indigo-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-700">$24.5M</div>
              <p className="text-xs text-indigo-600 mt-1">+18.2% 本月</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">协议数量</CardTitle>
              <Layers className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">12</div>
              <p className="text-xs text-purple-600 mt-1">活跃协议</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">24h 交易量</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">$3.2M</div>
              <p className="text-xs text-green-600 mt-1">+5.7% vs 昨日</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">活跃用户</CardTitle>
              <Users className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700">5,847</div>
              <p className="text-xs text-orange-600 mt-1">+156 本周</p>
            </CardContent>
          </Card>
        </div>

        {/* DeFi 协议列表 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">热门协议</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'MonadSwap',
                type: 'DEX',
                tvl: '$8.5M',
                apy: '15.2%',
                description: 'Monad 网络上领先的去中心化交易所',
                icon: '🔄'
              },
              {
                name: 'MonadLend',
                type: '借贷',
                tvl: '$6.2M',
                apy: '8.7%',
                description: '安全的去中心化借贷协议',
                icon: '🏦'
              },
              {
                name: 'YieldFarm',
                type: '收益农场',
                tvl: '$4.8M',
                apy: '25.6%',
                description: '高收益的流动性挖矿协议',
                icon: '🌾'
              },
              {
                name: 'MonadVault',
                type: '资产管理',
                tvl: '$3.1M',
                apy: '12.4%',
                description: '自动化投资策略平台',
                icon: '🏛️'
              },
              {
                name: 'InsureDAO',
                type: '保险',
                tvl: '$1.9M',
                apy: '6.8%',
                description: '去中心化保险协议',
                icon: '🛡️'
              },
              {
                name: 'SyntheticX',
                type: '合成资产',
                tvl: '$2.4M',
                apy: '18.9%',
                description: '合成资产交易平台',
                icon: '⚡'
              }
            ].map((protocol, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{protocol.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{protocol.name}</CardTitle>
                        <div className="text-sm text-purple-600 font-medium">{protocol.type}</div>
                      </div>
                    </div>
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                  <CardDescription>
                    {protocol.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">TVL</div>
                      <div className="font-semibold">{protocol.tvl}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">APY</div>
                      <div className="font-semibold text-green-600">{protocol.apy}</div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    进入协议
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* DeFi 教程 */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">DeFi 新手指南</CardTitle>
            <CardDescription className="text-lg">
              了解去中心化金融的基本概念和操作流程
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="font-semibold mb-2">连接钱包</h3>
                <p className="text-sm text-gray-600">连接您的 Web3 钱包开始 DeFi 之旅</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold mb-2">准备资金</h3>
                <p className="text-sm text-gray-600">获取 MON 代币用于交易和支付 Gas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-semibold mb-2">选择协议</h3>
                <p className="text-sm text-gray-600">根据需求选择合适的 DeFi 协议</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold mb-2">开始投资</h3>
                <p className="text-sm text-gray-600">参与流动性提供或借贷获得收益</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8">
                开始学习 DeFi
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}