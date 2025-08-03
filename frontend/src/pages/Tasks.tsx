import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const tasks = [
  {
    id: 1,
    title: '连接钱包',
    description: '将您的钱包连接到 Monad 网络',
    reward: '100 MON',
    status: 'available',
    type: '钱包连接'
  },
  {
    id: 2,
    title: '首次交易',
    description: '在 Monad 上进行您的第一笔交易',
    reward: '250 MON',
    status: 'locked',
    type: '首次交易'
  },
  {
    id: 3,
    title: '治理投票',
    description: '参与治理，对提案进行投票',
    reward: '500 MON',
    status: 'locked',
    type: '治理投票'
  },
  {
    id: 4,
    title: '社交分享',
    description: '在社交媒体上分享 Monad DApp',
    reward: '150 MON',
    status: 'available',
    type: '社交分享'
  },
  {
    id: 5,
    title: '提供流动性',
    description: '向 Monad DEX 池添加流动性',
    reward: '1000 MON',
    status: 'locked',
    type: '流动性挖矿'
  }
]

export function Tasks() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'text-green-600'
      case 'completed':
        return 'text-blue-600'
      case 'claimed':
        return 'text-gray-600'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return '可执行'
      case 'completed':
        return '已完成'
      case 'claimed':
        return '已领取'
      default:
        return '已锁定'
    }
  }

  const getButtonText = (status: string) => {
    switch (status) {
      case 'available':
        return '开始任务'
      case 'completed':
        return '领取奖励'
      case 'claimed':
        return '已完成'
      default:
        return '已锁定'
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">任务中心</h1>
          <p className="text-muted-foreground">
            完成任务获得 MON 代币并提升您的等级
          </p>
        </div>

        <div className="grid gap-6">
          {tasks.map((task) => (
            <Card key={task.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{task.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {task.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getStatusColor(task.status)}`}>
                      +{task.reward}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {getStatusText(task.status)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-muted-foreground">
                      类型: {task.type}
                    </div>
                  </div>
                  <Button
                    variant={task.status === 'available' ? 'default' : 'outline'}
                    disabled={task.status === 'locked' || task.status === 'claimed'}
                  >
                    {getButtonText(task.status)}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>任务进度</CardTitle>
            <CardDescription>
              您的整体任务完成统计
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">0/5</div>
                <div className="text-sm text-muted-foreground">已完成任务</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">0 MON</div>
                <div className="text-sm text-muted-foreground">总奖励</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">0 天</div>
                <div className="text-sm text-muted-foreground">当前连续天数</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}