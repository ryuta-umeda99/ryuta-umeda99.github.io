import { useState, useEffect } from 'react'

/**
 * useLoadingフックの戻り値の型
 */
interface UseLoadingReturn {
  /** ローディング中かどうか */
  loading: boolean
  /** ローディング進捗率 (0-100) */
  progress: number
  /** 表示するメッセージ */
  displayText: string
}

/**
 * ローディング状態を管理するカスタムフック
 * 
 * @returns ローディング状態、進捗率、表示メッセージ
 * 
 * @example
 * ```tsx
 * const { loading, progress, displayText } = useLoading()
 * if (loading) return <LoadingScreen progress={progress} displayText={displayText} />
 * ```
 */
export const useLoading = (): UseLoadingReturn => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [displayText, setDisplayText] = useState('')
  
  // ローディング中に表示するメッセージ配列
  const messages = ['Initializing...', 'Loading assets...', 'Almost there...', 'Ready!']

  useEffect(() => {
    let currentProgress = 0
    let messageIndex = 0
    
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15
      
      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)
        setDisplayText(messages[3])
        clearInterval(interval)
        setTimeout(() => setLoading(false), 500)
      } else {
        setProgress(Math.min(currentProgress, 100))
        const newIndex = Math.floor((currentProgress / 100) * (messages.length - 1))
        if (newIndex !== messageIndex) {
          messageIndex = newIndex
          setDisplayText(messages[messageIndex])
        }
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return { loading, progress, displayText }
}
