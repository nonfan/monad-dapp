import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const proposals = [
  {
    id: 1,
    title: '增加质押奖励',
    description: '提议将质押奖励增加20%，以激励更多用户参与网络质押',
    proposer: '0x1234...5678',
    status: 'active',
    votesFor: '125,000',
    votesAgainst: '45,000',
    endTime: '2024-01-15',
    category: '经济类'
  },
  {
    id: 2,
    title: '网络升级 v2.0',
    description: '重大网络升级，提高交易吞吐量并降低手续费',
    proposer: '0x9876...5432',
    status: 'succeeded',
    votesFor: '280,000',
    votesAgainst: '20,000',
    endTime: '2024-01-10',
    category: '技术类'
  },
  {
    id: 3,
    title: '社区金库分配',
    description: '从金库中分配100万MON代币用于社区开发资助',
    proposer: '0xabcd...efgh',
    status: 'defeated',
    votesFor: '85,000',
    votesAgainst: '180,000',
    endTime: '2024-01-08',
    category: '金库类'
  }
]

export function Governance() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800'
      case 'succeeded':
        return 'bg-green-100 text-green-800'
      case 'defeated':
        return 'bg-red-100 text-red-800'
      case 'executed':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '投票中'
      case 'succeeded':
        return '已通过'
      case 'defeated':
        return '已否决'
      case 'executed':
        return '已执行'
      default:
        return '未知'
    }
  }

  const calculateSupport = (votesFor: string, votesAgainst: string) => {
    const forVotes = parseInt(votesFor.replace(',', ''))
    const againstVotes = parseInt(votesAgainst.replace(',', ''))
    const total = forVotes + againstVotes
    return total > 0 ? ((forVotes / total) * 100).toFixed(1) : '0'
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">治理投票</h1>
            <p className="text-muted-foreground">
              参与 Monad 网络治理，对提案进行投票
            </p>
          </div>
          <Button className="bg-gradient-to-r from-monad-primary to-monad-secondary">
            发起提案
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">活跃提案</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">450,000</div>
              <div className="text-sm text-muted-foreground">总投票数</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">您的投票</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">0 MON</div>
              <div className="text-sm text-muted-foreground">投票权力</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {proposals.map((proposal) => (
            <Card key={proposal.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-xl">{proposal.title}</CardTitle>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                        {getStatusText(proposal.status)}
                      </span>
                    </div>
                    <CardDescription>
                      {proposal.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>提议者: {proposal.proposer}</span>
                      <span>•</span>
                      <span>分类: {proposal.category}</span>
                      <span>•</span>
                      <span>截止: {proposal.endTime}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">支持: {proposal.votesFor} MON</span>
                        <span className="text-sm font-medium">反对: {proposal.votesAgainst} MON</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {calculateSupport(proposal.votesFor, proposal.votesAgainst)}% 支持率
                      </div>
                    </div>
                    {proposal.status === 'active' && (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          反对
                        </Button>
                        <Button size="sm">
                          支持
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ 
                        width: `${calculateSupport(proposal.votesFor, proposal.votesAgainst)}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>如何投票</CardTitle>
            <CardDescription>
              了解治理流程
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-monad-primary text-white rounded-full flex items-center justify-center mx-auto">1</div>
                <h4 className="font-medium">持有 MON 代币</h4>
                <p className="text-sm text-muted-foreground">您的投票权力基于 MON 代币余额</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-monad-primary text-white rounded-full flex items-center justify-center mx-auto">2</div>
                <h4 className="font-medium">审查提案</h4>
                <p className="text-sm text-muted-foreground">阅读提案详情和社区讨论</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-monad-primary text-white rounded-full flex items-center justify-center mx-auto">3</div>
                <h4 className="font-medium">投出您的票</h4>
                <p className="text-sm text-muted-foreground">在投票期内对提案投支持或反对票</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}