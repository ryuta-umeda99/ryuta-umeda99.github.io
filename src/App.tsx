import { useState } from 'react'
import './App.css'
import './pixel.css'
import './neon.css'
import { useLoading, useCursor, useTheme } from './hooks'
import { LoadingScreen, Navigation } from './components'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'

/**
 * メインアプリケーションコンポーネント
 * ページルーティング、テーマ管理、ローディング状態を管理
 */
function App() {
  // ページ状態管理
  const [page, setPage] = useState('home')
  const [selectedTech, setSelectedTech] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  
  // カスタムフック
  const { loading, progress, displayText } = useLoading()
  const themeControls = useTheme()
  useCursor()

  /**
   * 技術クリック時にポートフォリオページへ遷移
   * @param tech - 選択された技術名
   */
  const navigateToPortfolio = (tech: string) => {
    setSelectedTech(tech)
    setPage('portfolio')
  }

  // ローディング中はローディング画面を表示
  if (loading) {
    return <LoadingScreen displayText={displayText} progress={progress} />
  }

  /**
   * 現在のページに応じたコンポーネントをレンダリング
   */
  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />
      case 'about': return <About />
      case 'skills': return <Skills onTechClick={navigateToPortfolio} />
      case 'portfolio': return <Portfolio selectedTech={selectedTech} onClearTech={() => setSelectedTech('')} />
      default: return <Home />
    }
  }

  return (
    <div className="app">
      <Navigation 
        page={page}
        setPage={setPage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeControls={themeControls}
        setSelectedTech={setSelectedTech}
      />
      <main>{renderPage()}</main>
    </div>
  )
}

export default App
