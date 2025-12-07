import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

function App() {
  const [page, setPage] = useState('about')

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPage('about')} className={page === 'about' ? 'active' : ''}>自己紹介</button>
        <button onClick={() => setPage('portfolio')} className={page === 'portfolio' ? 'active' : ''}>ポートフォリオ</button>
      </nav>
      <main>
        {page === 'about' && <About />}
        {page === 'portfolio' && <Portfolio />}
      </main>
    </div>
  )
}

export default App
