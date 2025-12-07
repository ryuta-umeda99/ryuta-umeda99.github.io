import { ThemeControls } from '../types'

/**
 * NavigationコンポーネントのProps
 */
interface NavigationProps {
  /** 現在のページ */
  page: string
  /** ページ変更関数 */
  setPage: (page: string) => void
  /** モバイルメニューの開閉状態 */
  menuOpen: boolean
  /** メニュー開閉関数 */
  setMenuOpen: (open: boolean) => void
  /** テーマ制御機能 */
  themeControls: ThemeControls
  /** 選択された技術をリセットする関数 */
  setSelectedTech: (tech: string) => void
}

/**
 * ナビゲーションバーコンポーネント
 * ページ遷移、テーマ切り替え、モード切り替え機能を提供
 * 
 * @param props - NavigationProps
 */
export default function Navigation({ 
  page, 
  setPage, 
  menuOpen, 
  setMenuOpen, 
  themeControls,
  setSelectedTech 
}: NavigationProps) {
  const { theme, toggleTheme, neonMode, pixelMode, setNormalMode, togglePixelMode, toggleNeonMode } = themeControls

  /**
   * ページ変更時の処理
   * メニューを閉じて、選択技術をリセット
   */
  const handlePageChange = (newPage: string) => {
    setPage(newPage)
    setMenuOpen(false)
    setSelectedTech('')
  }

  return (
    <nav>
      <div className="nav-logo">Plum</div>
      <div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
        <button className={page === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>Home</button>
        <button className={page === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>About</button>
        <button className={page === 'skills' ? 'active' : ''} onClick={() => handlePageChange('skills')}>Skills</button>
        <button className={page === 'portfolio' ? 'active' : ''} onClick={() => handlePageChange('portfolio')}>Portfolio</button>
        <button className="theme-toggle" onClick={toggleTheme} disabled={neonMode}>
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <button className={`theme-toggle ${!pixelMode && !neonMode ? 'mode-active' : ''}`} onClick={setNormalMode}>
          <span className="material-symbols-outlined">palette</span>
        </button>
        <button className={`theme-toggle ${pixelMode ? 'mode-active' : ''}`} onClick={togglePixelMode}>
          <span className="material-symbols-outlined">sports_esports</span>
        </button>
        <button className={`theme-toggle ${neonMode ? 'mode-active' : ''}`} onClick={toggleNeonMode}>
          <span className="material-symbols-outlined">bolt</span>
        </button>
      </div>
    </nav>
  )
}
