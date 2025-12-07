import { useState, useEffect } from 'react'
import { ThemeControls } from '../types'

/**
 * テーマ制御機能を提供するカスタムフック
 * 
 * @returns テーマ状態と制御関数
 * 
 * @example
 * ```tsx
 * const { theme, toggleTheme, pixelMode, togglePixelMode } = useTheme()
 * <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
 * ```
 */
export const useTheme = (): ThemeControls => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [pixelMode, setPixelMode] = useState(false)
  const [neonMode, setNeonMode] = useState(false)

  // テーマ変更時にbodyのクラスを更新
  useEffect(() => {
    // ネオンモード時は強制的にダークモード
    document.body.className = neonMode ? 'dark' : theme
    if (pixelMode) document.body.classList.add('pixel-mode')
    if (neonMode) document.body.classList.add('neon-mode')
  }, [theme, pixelMode, neonMode])

  /** テーマをdark/lightで切り替える */
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  
  /** 通常モードに設定 (ピクセル/ネオンモードを無効化) */
  const setNormalMode = () => {
    setPixelMode(false)
    setNeonMode(false)
    document.body.classList.remove('pixel-mode', 'neon-mode')
  }

  /** ピクセルモードを切り替える (ネオンモードは無効化) */
  const togglePixelMode = () => {
    setNeonMode(false)
    setPixelMode(prev => !prev)
    document.body.classList.remove('neon-mode')
  }

  /** ネオンモードを切り替える (ピクセルモードは無効化、ダークモード固定) */
  const toggleNeonMode = () => {
    setPixelMode(false)
    setNeonMode(prev => !prev)
    setTheme('dark')
    document.body.classList.remove('pixel-mode')
  }

  return { theme, pixelMode, neonMode, toggleTheme, setNormalMode, togglePixelMode, toggleNeonMode }
}
