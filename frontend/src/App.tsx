import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import { Home } from '@/pages/Home'
import { Dashboard } from '@/pages/Dashboard'
import { Tokens } from '@/pages/Tokens'
import { Trading } from '@/pages/Trading'
import { Staking } from '@/pages/Staking'
import { NFTs } from '@/pages/NFTs'
import { DeFi } from '@/pages/DeFi'
import { Explorer } from '@/pages/Explorer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/defi" element={<DeFi />} />
          <Route path="/explorer" element={<Explorer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App