import { useState, useEffect } from 'react'

/**
 * 数値をアニメーションさせながら表示するカスタムフック
 * 
 * @param target - 最終的に表示する数値
 * @param duration - アニメーションの持続時間 (ミリ秒)
 * @param delay - アニメーション開始までの遅延 (ミリ秒)
 * @returns 現在のアニメーション中の数値
 * 
 * @example
 * ```tsx
 * const years = useAnimatedNumber(4, 1500, 500)
 * return <h3>{years}+</h3>
 * ```
 */
export const useAnimatedNumber = (target: number, duration = 1500, delay = 500): number => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now()
      
      // アニメーションループ
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        if (progress < 1) {
          setValue(Math.floor(Math.random() * (target + 5)))
          requestAnimationFrame(animate)
        } else {
          setValue(target)
        }
      }
      
      animate()
    }, delay)

    return () => clearTimeout(timeout)
  }, [target, duration, delay])

  return value
}
