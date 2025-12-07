import { useEffect } from 'react'

/**
 * カスタムカーソルを表示するカスタムフック
 * タッチデバイスでは自動的に無効化される
 * 
 * @example
 * ```tsx
 * function App() {
 *   useCursor()
 *   return <div>...</div>
 * }
 * ```
 */
export const useCursor = (): void => {
  useEffect(() => {
    // タッチデバイスではカスタムカーソルを無効化
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    // カーソル要素を作成
    const cursor = document.createElement('div')
    const cursorOutline = document.createElement('div')
    cursor.className = 'custom-cursor'
    cursorOutline.className = 'custom-cursor-outline'
    document.body.appendChild(cursor)
    document.body.appendChild(cursorOutline)

    // マウス移動時の処理
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
      cursorOutline.style.left = `${e.clientX}px`
      cursorOutline.style.top = `${e.clientY}px`
    }

    // ホバー時の処理 (ボタンやリンク上でカーソルを変化)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        document.body.classList.add('cursor-hover')
      }
    }

    // ホバー解除時の処理
    const handleMouseOut = () => {
      document.body.classList.remove('cursor-hover')
    }

    // クリック時のリップルエフェクト
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div')
      ripple.className = 'cursor-ripple'
      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('click', handleClick)
      cursor.remove()
      cursorOutline.remove()
    }
  }, [])
}
