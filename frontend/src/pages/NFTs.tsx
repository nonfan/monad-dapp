import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Palette, Heart, Eye, ShoppingBag, TrendingUp, Users } from 'lucide-react'

export function NFTs() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            NFT 市场
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            在 Monad 网络上发现、创建和交易独特的数字艺术品
          </p>
        </div>

        {/* NFT 市场统计 */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总交易额</CardTitle>
              <ShoppingBag className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-700">1.2M MON</div>
              <p className="text-xs text-pink-600 mt-1">≈ $2.94M USD</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NFT 总数</CardTitle>
              <Palette className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">8,547</div>
              <p className="text-xs text-purple-600 mt-1">+123 本周</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">活跃用户</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">2,347</div>
              <p className="text-xs text-blue-600 mt-1">+15% 本月</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">地板价</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">0.5 MON</div>
              <p className="text-xs text-green-600 mt-1">+8.7% 24h</p>
            </CardContent>
          </Card>
        </div>

        {/* 热门 NFT 集合 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">热门集合</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Monad Monsters',
                image: '/placeholder-nft-1.jpg',
                floor: '2.5 MON',
                volume: '45.2 MON',
                items: 1000,
                owners: 567
              },
              {
                name: 'Digital Dreamscape',
                image: '/placeholder-nft-2.jpg',
                floor: '1.8 MON',
                volume: '32.1 MON',
                items: 500,
                owners: 324
              },
              {
                name: 'Crypto Crystals',
                image: '/placeholder-nft-3.jpg',
                floor: '3.2 MON',
                volume: '67.8 MON',
                items: 2000,
                owners: 892
              }
            ].map((collection, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Palette className="w-16 h-16 text-purple-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{collection.name}</CardTitle>
                  <CardDescription>
                    {collection.items} 件作品 · {collection.owners} 位持有者
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">地板价</div>
                      <div className="font-semibold">{collection.floor}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">24h 交易量</div>
                      <div className="font-semibold">{collection.volume}</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    浏览集合
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 最新上架 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">最新上架</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Mystic Dragon #001', price: '5.2 MON', likes: 23, views: 156 },
              { name: 'Neon City Night', price: '3.8 MON', likes: 45, views: 289 },
              { name: 'Abstract Emotions', price: '2.1 MON', likes: 67, views: 234 },
              { name: 'Digital Landscape', price: '4.5 MON', likes: 34, views: 189 },
              { name: 'Pixel Art Master', price: '1.9 MON', likes: 89, views: 456 },
              { name: 'Future Vision', price: '6.7 MON', likes: 12, views: 98 },
              { name: 'Color Symphony', price: '3.3 MON', likes: 56, views: 267 },
              { name: 'Tech Genesis', price: '4.1 MON', likes: 78, views: 345 }
            ].map((nft, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
                  <Palette className="w-12 h-12 text-purple-400" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold truncate mb-2">{nft.name}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-purple-600">{nft.price}</span>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{nft.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{nft.views}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    立即购买
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 创建 NFT */}
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">创建您的 NFT</CardTitle>
            <CardDescription className="text-lg">
              将您的数字作品转化为独一无二的 NFT
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">上传作品</h3>
                <p className="text-sm text-gray-600">支持图片、视频、音频等多种格式</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">设置详情</h3>
                <p className="text-sm text-gray-600">添加名称、描述和稀有属性</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">发布上架</h3>
                <p className="text-sm text-gray-600">选择销售方式并发布到市场</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8">
                开始创建 NFT
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 我的 NFT */}
        <div>
          <h2 className="text-2xl font-bold mb-6">我的收藏</h2>
          <Card>
            <CardContent className="p-8 text-center">
              <Palette className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">暂无 NFT 收藏</h3>
              <p className="text-gray-500 mb-4">连接钱包后查看您的 NFT 收藏</p>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600">
                连接钱包
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}