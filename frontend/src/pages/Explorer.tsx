import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Activity, File, Hash, Search, Users} from 'lucide-react'
import {useBlockNumber, usePublicClient} from 'wagmi'
import React, {useEffect, useState} from 'react'
import {Transaction} from "@/types";

type BlockRow = {
  number: bigint
  hash: `0x${string}`
  txns: number
  timestamp?: bigint
}

const short = (s?: string, left = 6, right = 4) =>
  !s ? '-' : `${s.slice(0, left)}...${s.slice(-right)}`
const timeAgo = (ts?: bigint) => {
  if (!ts) return '--'
  const diff = Math.max(0, Math.floor(Date.now() / 1000 - Number(ts)))
  return `${diff} secs ago`
}

export function Explorer() {
  const {data: latestBlock} = useBlockNumber({watch: true})
  const publicClient = usePublicClient()
  const [blocks, setBlocks] = useState<BlockRow[]>([]);
  const [txs, setTxs] = useState<Transaction[]>([])

  const TopItems: TopCardProps[] = [
    {
      icon: Activity, title: "Total Txn", main: "2,448,079,142", items: [
        {value1: "TPS", value2: "24H Peak TPS"},
        {value1: "266", value2: "1,560"},
        {value1: "Total Accounts", value2: "24H New Accounts"},
        {value1: "308,295,757", value2: "33,565"},
      ]
    },
    {
      icon: Hash, title: "Current Block", main: "#29,983,970", items: [
        {value1: "Avg Block Time", value2: ""},
        {value1: "0.5 secs", value2: ""},
        {value1: "Transactions", value2: "AVG Gas per Txn"},
        {value1: "52", value2: "0.025049"},
      ]
    },
    {
      icon: File, title: "Total Contracts", main: "33,943,867", items: [
        {value1: "24H New Contracts", value2: ""},
        {value1: "107,493", value2: ""},
        {value1: "Total Tokens", value2: "24H New Tokens"},
        {value1: "3,843,104", value2: "16,038"},
      ]
    },
    {
      icon: Users, title: "Total Validators", main: "99", items: [
        {value1: "Total Stake MON", value2: ""},
        {value1: "1,980", value2: ""},
        {value1: "Total Supply", value2: "Burnt MON"},
        {value1: "10B", value2: "17.7M"},
      ]
    }
  ]

  useEffect(() => {
    if (!latestBlock || !publicClient) return
    const run = async () => {
      const nums = Array.from({length: 7}, (_, i) => latestBlock - BigInt(i))
      const list = await Promise.all(
        nums.map(async (n) => {
          const b = await publicClient.getBlock({blockNumber: n, includeTransactions: true})

          // 只在最新区块时更新交易列表
          if (n === latestBlock) {
            const rows: Transaction[] = (b.transactions as any[]).slice(0, 7).map(item => ({
              ...item,
              timestamp: b.timestamp
            }))
            setTxs(rows)
          }

          return {
            number: n,
            hash: b.hash!,
            txns: Array.isArray(b.transactions) ? b.transactions.length : (b.transactions as any[]).length,
            timestamp: b.timestamp,
          } as BlockRow
        }),
      )
      setBlocks(list)
    }

    run()
  }, [latestBlock, publicClient])


  return (
    <main className="mx-auto max-w-[1400px] px-4 py-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl pb-10">
        <h1 className="mb-6 text-center text-4xl font-semibold tracking-tight text-gray-900">
          Explore Monad Blockchain
        </h1>

        {/* 搜索条 */}
        <div
          className="mx-auto flex w-full max-w-3xl items-center gap-3 rounded-full bg-white/90 p-2 pl-6 shadow-lg ring-1 ring-black/5 backdrop-blur">
          <Label htmlFor="search" className="sr-only">Search</Label>
          <Input
            id="search"
            placeholder="Search by Address, Transaction, Block, Token, NFT"
            className="h-12 flex-1 border-0 bg-transparent text-base focus-visible:ring-0"
          />
          <div className="hidden items-center gap-2 pr-1 md:flex">
            <kbd className="rounded-md border bg-gray-50 px-2 py-1 text-xs text-gray-600">/</kbd>
            <Button className="h-12 rounded-full bg-indigo-500 px-6 hover:bg-indigo-600">
              <Search className="mr-2 h-5 w-5"/>
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* 顶部统计卡 */}
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {
          TopItems.map(item => <TopCard {...item}/>)
        }
      </section>

      {/* Latest Blocks / Latest Transactions */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Latest Blocks */}
        <Card className="rounded-3xl shadow-sm">
          <CardHeader className="rounded-t-3xl bg-indigo-50/80 py-4">
            <CardTitle className="text-base font-semibold text-gray-800">Latest Blocks</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y">
              {blocks.map((b) => (
                <li key={b.hash} className="flex items-start justify-between px-5 py-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                      <Hash className="h-4 w-4 text-gray-500"/>
                    </div>
                    <div className="flex flex-col">
                      <a className="text-sm font-semibold text-indigo-600 hover:underline"
                         target="_blank" href={`https://testnet.monadexplorer.com/block/${b.number.toString()}`}>
                        #{b.number.toString()}
                      </a>
                      <span className="text-xs text-gray-500">{timeAgo(b.timestamp)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-700">
                      Hash{' '}
                      <a className="text-indigo-600 hover:underline" target="_blank"
                         href={`https://testnet.monadexplorer.com/block/${b.number.toString()}`}>
                        {short(b.hash)}
                      </a>
                    </div>
                    <div className="text-xs text-gray-500">{b.txns} txns</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="px-5 pb-4 pt-3">
              <Button variant="outline" className="w-full rounded-xl">
                View All Blocks
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Latest Transactions（先放占位结构，等你接数据再替换） */}
        <Card className="rounded-3xl shadow-sm">
          <CardHeader className="rounded-t-3xl bg-indigo-50/80 py-4">
            <CardTitle className="text-base font-semibold text-gray-800">Latest Transactions</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y">
              {txs.map((tx, i) => (
                <li key={i} className="flex items-start justify-between px-5 py-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                      <Activity className="h-4 w-4 text-gray-500"/>
                    </div>
                    <div className="flex flex-col">
                      <a className="font-mono text-sm font-semibold text-indigo-600 hover:underline" target="_blank"
                         href={`https://testnet.monadexplorer.com/tx/${tx.hash}`}>
                        {short(tx.hash)}
                      </a>
                      <span className="text-xs text-gray-500">{timeAgo(tx.timestamp)}</span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <div>
                      From <a className="text-indigo-600 hover:underline" href="#">
                      {short(tx.from)}
                    </a>
                    </div>
                    <div>
                      To <a className="text-indigo-600 hover:underline" href="#">
                      {short(tx.to)}
                    </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="px-5 pb-4 pt-3">
              <Button variant="outline" className="w-full rounded-xl">
                View All Transactions
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

type TopCardItem = {
  value1: string | number,
  value2: string | number,
}

interface TopCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  main: React.ReactNode
  items: TopCardItem[]
}

export function TopCard({icon: Icon, title, main, items}: TopCardProps) {
  return (
    <Card className="rounded-[22px] border border-[#e2e7ee]">
      <div className="flex items-start gap-3 p-5">
        {/* 圆底图标 */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <Icon className="h-5 w-5 text-gray-600"/>
        </div>

        {/* 文案区 */}
        <div className="flex-1">
          <div className="text-sm text-gray-600">{title}</div>
          {main && (
            <div className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
              {main}
            </div>
          )}
        </div>
      </div>
      {/* 分组渲染：每 2 行后加一条虚线，效果与截图一致 */}
      <div className="m-1 bg-[#fbfaf9] p-5 rounded-2xl">
        <div className="text-sm text-gray-600">
          {items.map((it, idx) => (
            <React.Fragment key={idx}>
              <div className="flex justify-between items-center">
                <div className={`mt-1 ${idx % 2 > 0 ? '' : ' font-semibold text-gray-900'}`}>
                  {it.value1 ?? '—'}
                </div>
                <div
                  className={`text-right ${idx % 2 > 0 ? '' : ' font-semibold text-gray-900'}`}>
                  {it.value2 ?? '—'}
                </div>
              </div>
              {/* 每两项后插入虚线分割（且不是最后一组） */}
              {(idx % 2 === 1) && idx < items.length - 1 && (
                <div className="col-span-2 my-1 border-t border-dashed border-gray-300/80"/>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  )
}
