import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PiggyBank, Coins, TrendingUp, Award, Clock, Users } from 'lucide-react'

export function Staking() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            质押挖矿
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            通过质押 MON 代币获得稳定收益，参与网络治理并享受多重奖励
          </p>
        </div>

        {/* 质押概览 */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总质押量</CardTitle>
              <PiggyBank className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">18.5M MON</div>
              <p className="text-xs text-green-600 mt-1">占总供应量 74%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">年化收益率</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">12.5%</div>
              <p className="text-xs text-blue-600 mt-1">动态调整</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">我的质押</CardTitle>
              <Coins className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">500 MON</div>
              <p className="text-xs text-purple-600 mt-1">价值 $1,225</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">质押者数量</CardTitle>
              <Users className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700">12,847</div>
              <p className="text-xs text-orange-600 mt-1">+156 本周</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 质押操作面板 */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="stake" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white border border-green-200">
                <TabsTrigger value="stake">质押代币</TabsTrigger>
                <TabsTrigger value="unstake">取消质押</TabsTrigger>
                <TabsTrigger value="rewards">奖励管理</TabsTrigger>
              </TabsList>

              {/* 质押代币 */}
              <TabsContent value="stake">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <PiggyBank className="w-5 h-5 text-green-600" />
                      <span>质押 MON 代币</span>
                    </CardTitle>
                    <CardDescription>
                      质押您的 MON 代币以获得奖励并参与网络治理
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="stake-amount">质押数量</Label>
                          <Input 
                            id="stake-amount" 
                            type="number" 
                            placeholder="100" 
                            className="mt-1"
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            可用余额: 1,234.56 MON
                          </p>
                        </div>
                        
                        <div>
                          <Label htmlFor="stake-period">质押期限</Label>
                          <select className="w-full mt-1 p-2 border rounded-md">
                            <option value="flexible">灵活质押 (8% APY)</option>
                            <option value="30days">30天锁定 (10% APY)</option>
                            <option value="90days">90天锁定 (12% APY)</option>
                            <option value="180days">180天锁定 (15% APY)</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>预计日收益:</span>
                            <span className="font-semibold text-green-600">0.34 MON</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>预计月收益:</span>
                            <span className="font-semibold text-green-600">10.42 MON</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>预计年收益:</span>
                            <span className="font-semibold text-green-600">125 MON</span>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
                          开始质押
                        </Button>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-4">质押优势</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start space-x-2">
                            <Award className="w-4 h-4 text-green-600 mt-0.5" />
                            <span>获得稳定的被动收入</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Users className="w-4 h-4 text-green-600 mt-0.5" />
                            <span>参与网络治理投票</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <TrendingUp className="w-4 h-4 text-green-600 mt-0.5" />
                            <span>支持网络安全性</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Coins className="w-4 h-4 text-green-600 mt-0.5" />
                            <span>享受复合收益</span>
                          </li>
                        </ul>

                        <div className="mt-4 p-3 bg-white rounded border">
                          <div className="text-xs text-gray-500">当前 APY</div>
                          <div className="text-2xl font-bold text-green-600">12.5%</div>
                          <div className="text-xs text-gray-500">基于30天锁定</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 取消质押 */}
              <TabsContent value="unstake">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <span>取消质押</span>
                    </CardTitle>
                    <CardDescription>
                      解除质押代币，灵活质押可随时取出
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">当前质押详情</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>质押总量:</span>
                            <span className="font-semibold">500 MON</span>
                          </div>
                          <div className="flex justify-between">
                            <span>灵活质押:</span>
                            <span>200 MON (可随时取出)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>锁定质押:</span>
                            <span>300 MON (15天后解锁)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>累计奖励:</span>
                            <span className="text-green-600 font-semibold">12.5 MON</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="unstake-amount">取消质押数量</Label>
                        <Input 
                          id="unstake-amount" 
                          type="number" 
                          placeholder="50" 
                          className="mt-1"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          可取出: 200 MON (灵活质押)
                        </p>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h5 className="font-semibold text-yellow-800 mb-2">⚠️ 取消质押说明</h5>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• 灵活质押可随时取出，无需等待</li>
                          <li>• 锁定质押需等待解锁期结束</li>
                          <li>• 提前解锁可能产生手续费</li>
                          <li>• 取消质押后将停止获得奖励</li>
                        </ul>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600">
                        确认取消质押
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 奖励管理 */}
              <TabsContent value="rewards">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      <span>奖励管理</span>
                    </CardTitle>
                    <CardDescription>
                      查看和领取您的质押奖励
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">可领取奖励</h4>
                          <div className="text-3xl font-bold text-purple-600 mb-2">12.5 MON</div>
                          <p className="text-sm text-purple-600">≈ $30.63 USD</p>
                          <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                            领取奖励
                          </Button>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>今日奖励:</span>
                            <span className="font-semibold text-green-600">0.42 MON</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>本周奖励:</span>
                            <span className="font-semibold text-green-600">2.94 MON</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>本月奖励:</span>
                            <span className="font-semibold text-green-600">12.5 MON</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>累计奖励:</span>
                            <span className="font-semibold text-green-600">125.8 MON</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">奖励历史</h4>
                        <div className="space-y-3 max-h-60 overflow-y-auto">
                          {[
                            { date: '2024-01-03', amount: '0.42 MON', type: '日常奖励' },
                            { date: '2024-01-02', amount: '0.41 MON', type: '日常奖励' },
                            { date: '2024-01-01', amount: '2.1 MON', type: '月度红利' },
                            { date: '2023-12-31', amount: '0.40 MON', type: '日常奖励' },
                            { date: '2023-12-30', amount: '0.39 MON', type: '日常奖励' },
                          ].map((reward, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                              <div>
                                <div className="font-medium text-sm">{reward.type}</div>
                                <div className="text-xs text-gray-500">{reward.date}</div>
                              </div>
                              <div className="text-green-600 font-semibold">
                                +{reward.amount}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* 侧边栏统计 */}
          <div className="space-y-6">
            {/* 质押统计 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">质押统计</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>网络 APY:</span>
                    <span className="font-semibold text-green-600">12.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>质押比例:</span>
                    <span>74%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>验证节点:</span>
                    <span>128</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>解绑期:</span>
                    <span>7-21 天</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-xs text-gray-500 mb-2">质押分布</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>大户 (10K):</span>
                      <span>45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>中户 (1K-10K):</span>
                      <span>35%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>小户 (1K):</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 质押池信息 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">热门质押池</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: '官方池', apy: '12.5%', staked: '8.5M MON', fee: '0%' },
                    { name: '社区池A', apy: '13.2%', staked: '3.2M MON', fee: '2%' },
                    { name: '社区池B', apy: '11.8%', staked: '2.1M MON', fee: '1%' },
                  ].map((pool, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">{pool.name}</span>
                        <span className="text-green-600 font-semibold text-sm">{pool.apy}</span>
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div>质押: {pool.staked}</div>
                        <div>费用: {pool.fee}</div>
                      </div>
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