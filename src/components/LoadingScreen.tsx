/**
 * LoadingScreenコンポーネントのProps
 */
interface LoadingScreenProps {
  /** 表示するメッセージ */
  displayText: string
  /** ローディング進捗率 (0-100) */
  progress: number
}

/**
 * ローディング画面コンポーネント
 * プログレスバーとメッセージを表示
 * 
 * @param props - LoadingScreenProps
 */
export default function LoadingScreen({ displayText, progress }: LoadingScreenProps) {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1>
          <span className="typewriter">{displayText}</span>
          <span className="cursor">|</span>
        </h1>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p>{Math.floor(progress)}%</p>
      </div>
    </div>
  )
}
