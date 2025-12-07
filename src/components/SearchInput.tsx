/**
 * SearchInputコンポーネントのProps
 */
interface SearchInputProps {
  /** 入力値 */
  value: string
  /** 値変更時のコールバック関数 */
  onChange: (value: string) => void
  /** プレースホルダーテキスト */
  placeholder: string
}

/**
 * 検索入力コンポーネント
 * プロジェクトのフィルタリングに使用
 * 
 * @param props - SearchInputProps
 */
export default function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <input 
      type="text" 
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  )
}
