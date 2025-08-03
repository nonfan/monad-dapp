import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Profile() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">个人中心</h1>
          <p className="text-muted-foreground">
            管理您的账户并查看在 Monad 上的活动
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>账户信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-monad-primary to-monad-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">用</span>
                </div>
                <div>
                  <div className="font-medium">未连接</div>
                  <div className="text-sm text-muted-foreground">连接钱包查看个人资料</div>
                </div>
                <Button className="w-full">
                  连接钱包
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>统计概览</CardTitle>
                <CardDescription>
                  您在 Monad 网络上的活动统计
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm text-muted-foreground">已完成任务</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm text-muted-foreground">交易次数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm text-muted-foreground">投票次数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm text-muted-foreground">活跃天数</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>成就系统</CardTitle>
                <CardDescription>
                  通过完成各种活动解锁成就
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg opacity-50">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      🔐
                    </div>
                    <div>
                      <div className="font-medium">首次连接</div>
                      <div className="text-sm text-muted-foreground">连接您的钱包</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg opacity-50">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      💰
                    </div>
                    <div>
                      <div className="font-medium">首次交易</div>
                      <div className="text-sm text-muted-foreground">完成您的第一笔交易</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg opacity-50">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      🗳️
                    </div>
                    <div>
                      <div className="font-medium">民主参与者</div>
                      <div className="text-sm text-muted-foreground">投出您的第一票</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg opacity-50">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      🏆
                    </div>
                    <div>
                      <div className="font-medium">任务达人</div>
                      <div className="text-sm text-muted-foreground">完成10个任务</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>最近活动</CardTitle>
            <CardDescription>
              您在 Monad 网络上的最新操作
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              暂无活动记录。连接钱包开始探索吧！
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>设置</CardTitle>
            <CardDescription>
              自定义您的使用体验
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">邮件通知</div>
                  <div className="text-sm text-muted-foreground">接收关于您活动的更新</div>
                </div>
                <Button variant="outline" size="sm">
                  配置
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">隐私设置</div>
                  <div className="text-sm text-muted-foreground">控制哪些信息公开显示</div>
                </div>
                <Button variant="outline" size="sm">
                  管理
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">导出数据</div>
                  <div className="text-sm text-muted-foreground">下载您的账户数据</div>
                </div>
                <Button variant="outline" size="sm">
                  导出
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}