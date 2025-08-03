import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Coins, Send, Flame, Plus, ArrowUpDown, History } from 'lucide-react'

export function Tokens() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            代币管理中心
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            在 Monad 网络上管理您的代币：铸造、转账、销毁等完整功能
          </p>
        </div>

        {/* 代币余额概览 */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MON 余额</CardTitle>
              <Coins className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">1,234.56 MON</div>
              <p className="text-xs text-purple-600 mt-1">≈ $2,469.12 USD</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总资产价值</CardTitle>
              <ArrowUpDown className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">$3,847.89</div>
              <p className="text-xs text-green-600 mt-1">+12.5% 24h</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">今日交易</CardTitle>
              <History className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">8</div>
              <p className="text-xs text-green-600 mt-1">成功执行</p>
            </CardContent>
          </Card>
        </div>

        {/* 代币操作标签页 */}
        <Tabs defaultValue="mint" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-purple-200">
            <TabsTrigger value="mint" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>铸造代币</span>
            </TabsTrigger>
            <TabsTrigger value="transfer" className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>转账</span>
            </TabsTrigger>
            <TabsTrigger value="burn" className="flex items-center space-x-2">
              <Flame className="w-4 h-4" />
              <span>销毁</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <History className="w-4 h-4" />
              <span>历史</span>
            </TabsTrigger>
          </TabsList>

          {/* 铸造代币 */}
          <TabsContent value="mint">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-purple-600" />
                  <span>铸造新代币</span>
                </CardTitle>
                <CardDescription>
                  在 Monad 网络上铸造新的代币到指定地址
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="mint-to">接收地址</Label>
                      <Input 
                        id="mint-to" 
                        placeholder="0x..." 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mint-amount">铸造数量</Label>
                      <Input 
                        id="mint-amount" 
                        type="number" 
                        placeholder="100" 
                        className="mt-1"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      铸造代币
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">铸造说明</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 仅合约所有者可以铸造新代币</li>
                      <li>• 铸造会增加代币总供应量</li>
                      <li>• 确认接收地址正确无误</li>
                      <li>• 铸造操作不可逆转</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 转账 */}
          <TabsContent value="transfer">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5 text-blue-600" />
                  <span>转账代币</span>
                </CardTitle>
                <CardDescription>
                  向其他地址发送您的代币
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="transfer-to">接收地址</Label>
                      <Input 
                        id="transfer-to" 
                        placeholder="0x..." 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="transfer-amount">转账数量</Label>
                      <Input 
                        id="transfer-amount" 
                        type="number" 
                        placeholder="10.5" 
                        className="mt-1"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        可用余额: 1,234.56 MON
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="gas-fee">Gas 费用</Label>
                      <Input 
                        id="gas-fee" 
                        value="0.001 MON" 
                        readOnly 
                        className="mt-1 bg-gray-50"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      发送转账
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">转账确认</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">接收地址:</span>
                        <span className="font-mono text-xs">0x1234...5678</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">转账金额:</span>
                        <span className="font-semibold">10.5 MON</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gas 费用:</span>
                        <span>0.001 MON</span>
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span>总计:</span>
                          <span>10.501 MON</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 销毁代币 */}
          <TabsContent value="burn">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-red-600" />
                  <span>销毁代币</span>
                </CardTitle>
                <CardDescription>
                  永久销毁您持有的代币，减少总供应量
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="burn-amount">销毁数量</Label>
                      <Input 
                        id="burn-amount" 
                        type="number" 
                        placeholder="50" 
                        className="mt-1"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        持有余额: 1,234.56 MON
                      </p>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">⚠️ 重要提醒</h5>
                      <p className="text-sm text-red-700">
                        代币销毁操作不可逆转，销毁的代币将永久从流通中移除。
                      </p>
                    </div>
                    <Button 
                      variant="destructive" 
                      className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                    >
                      确认销毁
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">销毁影响</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 减少代币总供应量</li>
                      <li>• 可能影响代币价格</li>
                      <li>• 操作完全不可逆转</li>
                      <li>• 需要支付 Gas 费用</li>
                    </ul>
                    <div className="mt-4 p-3 bg-white rounded border">
                      <div className="text-xs text-gray-500">当前总供应量</div>
                      <div className="font-semibold">1,000,000 MON</div>
                      <div className="text-xs text-red-600 mt-1">
                        销毁后: 999,950 MON
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 交易历史 */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="w-5 h-5 text-green-600" />
                  <span>交易历史</span>
                </CardTitle>
                <CardDescription>
                  查看您的代币交易记录
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: '接收', amount: '+100 MON', from: '0x1234...5678', time: '2 分钟前', status: '成功' },
                    { type: '发送', amount: '-50 MON', to: '0x9876...4321', time: '1 小时前', status: '成功' },
                    { type: '铸造', amount: '+1000 MON', from: '合约', time: '3 小时前', status: '成功' },
                    { type: '销毁', amount: '-25 MON', to: '销毁地址', time: '1 天前', status: '成功' },
                  ].map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          tx.type === '接收' ? 'bg-green-100 text-green-600' :
                          tx.type === '发送' ? 'bg-blue-100 text-blue-600' :
                          tx.type === '铸造' ? 'bg-purple-100 text-purple-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {tx.type === '接收' ? '↓' : tx.type === '发送' ? '↑' : tx.type === '铸造' ? '+' : '🔥'}
                        </div>
                        <div>
                          <div className="font-semibold">{tx.type}</div>
                          <div className="text-sm text-gray-500">
                            {tx.from && `从 ${tx.from}`}
                            {tx.to && `到 ${tx.to}`}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${
                          tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {tx.amount}
                        </div>
                        <div className="text-sm text-gray-500">{tx.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}