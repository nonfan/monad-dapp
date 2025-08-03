import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search, Hash, Clock, Users, Activity, ExternalLink } from 'lucide-react'

export function Explorer() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            区块浏览器
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索 Monad 网络上的区块、交易和地址信息
          </p>
        </div>

        {/* 搜索框 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Label htmlFor="search" className="sr-only">搜索</Label>
                <Input
                  id="search"
                  placeholder="输入交易哈希、区块号、或地址..."
                  className="text-lg h-12"
                />
              </div>
              <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-teal-600">
                <Search className="w-5 h-5 mr-2" />
                搜索
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 网络统计 */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">最新区块</CardTitle>
              <Hash className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">2,847,563</div>
              <p className="text-xs text-blue-600 mt-1">2 秒前</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">TPS</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">3,247</div>
              <p className="text-xs text-green-600 mt-1">每秒交易数</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gas 价格</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">0.001</div>
              <p className="text-xs text-purple-600 mt-1">MON</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">活跃地址</CardTitle>
              <Users className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700">47,362</div>
              <p className="text-xs text-orange-600 mt-1">24h 活跃</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 最新区块 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Hash className="w-5 h-5 text-blue-600" />
                <span>最新区块</span>
              </CardTitle>
              <CardDescription>
                Monad 网络上最新产生的区块
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { number: 2847563, hash: '0x1a2b3c...4d5e6f', txs: 247, time: '2 秒前', size: '45.2 KB' },
                  { number: 2847562, hash: '0x2b3c4d...5e6f7a', txs: 189, time: '4 秒前', size: '38.7 KB' },
                  { number: 2847561, hash: '0x3c4d5e...6f7a8b', txs: 201, time: '6 秒前', size: '41.3 KB' },
                  { number: 2847560, hash: '0x4d5e6f...7a8b9c', txs: 167, time: '8 秒前', size: '35.9 KB' },
                  { number: 2847559, hash: '0x5e6f7a...8b9c0d', txs: 223, time: '10 秒前', size: '47.1 KB' },
                ].map((block, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <Hash className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{block.number}</div>
                        <div className="text-sm text-gray-500 font-mono">{block.hash}</div>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div>{block.txs} 笔交易</div>
                      <div className="text-gray-500">{block.time}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 最新交易 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-green-600" />
                <span>最新交易</span>
              </CardTitle>
              <CardDescription>
                网络上最新确认的交易
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { hash: '0xa1b2c3...d4e5f6', from: '0x1234...5678', to: '0x9876...5432', value: '125.5 MON', time: '1 秒前' },
                  { hash: '0xb2c3d4...e5f6a7', from: '0x2345...6789', to: '0x8765...4321', value: '67.8 MON', time: '3 秒前' },
                  { hash: '0xc3d4e5...f6a7b8', from: '0x3456...7890', to: '0x7654...3210', value: '234.2 MON', time: '5 秒前' },
                  { hash: '0xd4e5f6...a7b8c9', from: '0x4567...8901', to: '0x6543...2109', value: '89.1 MON', time: '7 秒前' },
                  { hash: '0xe5f6a7...b8c9d0', from: '0x5678...9012', to: '0x5432...1098', value: '156.7 MON', time: '9 秒前' },
                ].map((tx, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <Activity className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-mono text-sm font-semibold">{tx.hash}</div>
                        <div className="text-xs text-gray-500">
                          {tx.from} → {tx.to}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-semibold">{tx.value}</div>
                      <div className="text-gray-500">{tx.time}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 网络健康状态 */}
        <Card>
          <CardHeader>
            <CardTitle>网络健康状态</CardTitle>
            <CardDescription>
              实时监控 Monad 网络的运行状态
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-lg font-bold text-green-700">正常</div>
                <div className="text-sm text-green-600">网络运行正常</div>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-lg font-bold text-blue-700">2.1 秒</div>
                <div className="text-sm text-blue-600">平均出块时间</div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-lg font-bold text-purple-700">128</div>
                <div className="text-sm text-purple-600">活跃验证节点</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}