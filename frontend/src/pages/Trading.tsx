import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, ArrowUpDown, DollarSign, Activity, BarChart3, Timer } from 'lucide-react'

export function Trading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            交易中心
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            在 Monad 网络上进行高速、低成本的代币交易
          </p>
        </div>

        {/* 市场概览 */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MON 价格</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">$2.45</div>
              <p className="text-xs text-green-600 mt-1">+5.2% 24h</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">24h 交易量</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">$2.4M</div>
              <p className="text-xs text-blue-600 mt-1">+12.3% vs 昨日</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">流动性</CardTitle>
              <Activity className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">$15.6M</div>
              <p className="text-xs text-purple-600 mt-1">深度充足</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">交易费用</CardTitle>
              <Timer className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700">$0.001</div>
              <p className="text-xs text-orange-600 mt-1">超低费用</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 交易面板 */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="spot" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white border border-blue-200">
                <TabsTrigger value="spot">现货交易</TabsTrigger>
                <TabsTrigger value="swap">代币兑换</TabsTrigger>
                <TabsTrigger value="limit">限价交易</TabsTrigger>
              </TabsList>

              {/* 现货交易 */}
              <TabsContent value="spot">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span>现货交易</span>
                    </CardTitle>
                    <CardDescription>
                      买入或卖出代币，价格实时变动
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="buy" className="space-y-4">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="buy" className="text-green-600">买入</TabsTrigger>
                        <TabsTrigger value="sell" className="text-red-600">卖出</TabsTrigger>
                      </TabsList>

                      <TabsContent value="buy" className="space-y-4">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="buy-price">买入价格 (USDT)</Label>
                            <Input id="buy-price" value="2.45" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="buy-amount">买入数量 (MON)</Label>
                            <Input id="buy-amount" placeholder="100" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="buy-total">总计 (USDT)</Label>
                            <Input id="buy-total" value="245.00" readOnly className="mt-1 bg-gray-50" />
                          </div>
                          <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
                            买入 MON
                          </Button>
                        </div>
                      </TabsContent>

                      <TabsContent value="sell" className="space-y-4">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="sell-price">卖出价格 (USDT)</Label>
                            <Input id="sell-price" value="2.45" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="sell-amount">卖出数量 (MON)</Label>
                            <Input id="sell-amount" placeholder="100" className="mt-1" />
                            <p className="text-sm text-gray-500 mt-1">可用: 1,234.56 MON</p>
                          </div>
                          <div>
                            <Label htmlFor="sell-total">总计 (USDT)</Label>
                            <Input id="sell-total" value="245.00" readOnly className="mt-1 bg-gray-50" />
                          </div>
                          <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600">
                            卖出 MON
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 代币兑换 */}
              <TabsContent value="swap">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <ArrowUpDown className="w-5 h-5 text-purple-600" />
                      <span>代币兑换</span>
                    </CardTitle>
                    <CardDescription>
                      直接兑换不同代币，自动匹配最优价格
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label>兑换出</Label>
                        <div className="flex mt-1 space-x-2">
                          <Input placeholder="100" className="flex-1" />
                          <Button variant="outline" className="px-4">MON</Button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">余额: 1,234.56 MON</p>
                      </div>

                      <div className="flex justify-center">
                        <Button variant="outline" size="sm" className="rounded-full p-2">
                          <ArrowUpDown className="w-4 h-4" />
                        </Button>
                      </div>

                      <div>
                        <Label>兑换入</Label>
                        <div className="flex mt-1 space-x-2">
                          <Input placeholder="245.00" readOnly className="flex-1 bg-gray-50" />
                          <Button variant="outline" className="px-4">USDT</Button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">余额: 500.00 USDT</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>兑换率:</span>
                          <span>1 MON = 2.45 USDT</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>手续费:</span>
                          <span>0.1% (0.245 USDT)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>滑点:</span>
                          <span>0.1%</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600">
                        确认兑换
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 限价交易 */}
              <TabsContent value="limit">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Timer className="w-5 h-5 text-orange-600" />
                      <span>限价交易</span>
                    </CardTitle>
                    <CardDescription>
                      设置目标价格，到达后自动执行交易
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="limit-price">限价 (USDT)</Label>
                        <Input id="limit-price" placeholder="2.50" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="limit-amount">数量 (MON)</Label>
                        <Input id="limit-amount" placeholder="100" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="limit-type">订单类型</Label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                          <option>买入限价单</option>
                          <option>卖出限价单</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="limit-expires">有效期</Label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                          <option>1 天</option>
                          <option>7 天</option>
                          <option>30 天</option>
                          <option>永久有效</option>
                        </select>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600">
                        创建限价单
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* 侧边栏信息 */}
          <div className="space-y-6">
            {/* 订单簿 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">订单簿</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 text-xs font-medium text-gray-500 pb-2 border-b">
                    <span>价格</span>
                    <span>数量</span>
                    <span>累计</span>
                  </div>
                  
                  {/* 卖单 */}
                  <div className="space-y-1">
                    {[
                      { price: '2.48', amount: '250', total: '620' },
                      { price: '2.47', amount: '180', total: '444.6' },
                      { price: '2.46', amount: '320', total: '787.2' },
                    ].map((order, i) => (
                      <div key={i} className="grid grid-cols-3 text-xs text-red-600">
                        <span>{order.price}</span>
                        <span>{order.amount}</span>
                        <span>{order.total}</span>
                      </div>
                    ))}
                  </div>

                  <div className="py-2 text-center font-semibold text-lg">2.45</div>

                  {/* 买单 */}
                  <div className="space-y-1">
                    {[
                      { price: '2.44', amount: '420', total: '1024.8' },
                      { price: '2.43', amount: '290', total: '704.7' },
                      { price: '2.42', amount: '190', total: '459.8' },
                    ].map((order, i) => (
                      <div key={i} className="grid grid-cols-3 text-xs text-green-600">
                        <span>{order.price}</span>
                        <span>{order.amount}</span>
                        <span>{order.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 最近交易 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">最近交易</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 text-xs font-medium text-gray-500 pb-2 border-b">
                    <span>价格</span>
                    <span>数量</span>
                    <span>时间</span>
                  </div>
                  {[
                    { price: '2.45', amount: '120', time: '14:32:01', type: 'buy' },
                    { price: '2.44', amount: '85', time: '14:31:45', type: 'sell' },
                    { price: '2.45', amount: '200', time: '14:31:22', type: 'buy' },
                    { price: '2.43', amount: '150', time: '14:30:58', type: 'sell' },
                    { price: '2.45', amount: '90', time: '14:30:33', type: 'buy' },
                  ].map((trade, i) => (
                    <div key={i} className="grid grid-cols-3 text-xs">
                      <span className={trade.type === 'buy' ? 'text-green-600' : 'text-red-600'}>
                        {trade.price}
                      </span>
                      <span>{trade.amount}</span>
                      <span className="text-gray-500">{trade.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}