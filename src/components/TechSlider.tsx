/**
 * TechSliderコンポーネントのProps
 */
interface TechSliderProps {
  /** 表示するバッジURL配列 */
  badges: string[]
  /** バッジクリック時のコールバック関数 */
  onTechClick?: (url: string) => void
}

/**
 * 技術バッジをスクロール表示するコンポーネント
 * 無限ループアニメーションでバッジを表示
 * 
 * @param props - TechSliderProps
 */
export default function TechSlider({ badges, onTechClick }: TechSliderProps) {
  // 無限ループのために配列を10倍にする
  const duplicatedBadges = Array(10).fill(badges).flat()

  return (
    <div className="tech-slider">
      <div className="tech-track">
        {duplicatedBadges.map((url, i) => (
          <img 
            key={i} 
            src={url} 
            alt="tech" 
            onClick={() => onTechClick?.(url)}
            style={{ cursor: onTechClick ? 'pointer' : 'default' }}
          />
        ))}
      </div>
    </div>
  )
}
