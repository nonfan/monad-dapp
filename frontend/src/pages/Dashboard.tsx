import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Dashboard() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">仪表板</h1>
          <p className="text-muted-foreground">
            监控您在 Monad 网络上的活动
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                总余额
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.0 MON</div>
              <p className="text-xs text-muted-foreground">
                $0.00 USD
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                已完成任务
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                较上月 +0
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                已获得奖励
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.0 MON</div>
              <p className="text-xs text-muted-foreground">
                较上月 +0%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                治理投票
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                较上月 +0
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>最近交易</CardTitle>
              <CardDescription>
                您最新的区块链交易记录
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                暂无交易记录。请连接钱包开始使用。
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>可用任务</CardTitle>
              <CardDescription>
                完成任务获得奖励
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">连接钱包</h4>
                    <p className="text-sm text-muted-foreground">连接您的钱包到 Monad</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">+100 MON</div>
                    <Button size="sm" variant="outline">
                      开始
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}