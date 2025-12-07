/**
 * プロジェクト情報を表す型
 */
export interface Project {
  /** プロジェクト名 */
  title: string
  /** プロジェクトの説明 */
  description: string
  /** プロジェクトへのリンク */
  link: string
  /** 使用技術のバッジURL配列 */
  tech: string[]
}

/**
 * 専門分野情報を表す型
 */
export interface Expertise {
  /** 専門分野のタイトル */
  title: string
  /** 専門分野の説明 */
  description: string
}

/**
 * 資格情報を表す型
 */
export interface Certification {
  /** 資格名 */
  name: string
  /** アイコンURL（オプション） */
  icon?: string
}

/**
 * プロフィール情報を表す型
 */
export interface Profile {
  /** 名前 */
  name: string
  /** プロフィール画像URL */
  image?: string
  /** 肩書き */
  title: string
  /** サブタイトル */
  subtitle: string
  /** 経験年数の説明 */
  experience: string
  /** 業務内容の説明 */
  description: string
  /** キャッチフレーズ */
  tagline: string
  /** 専門分野リスト */
  expertise: Expertise[]
  /** 資格リスト */
  certifications: Certification[]
  /** 連絡先情報 */
  contact: {
    /** GitHubプロフィールURL */
    github: string
    /** GitHubユーザー名 */
    username: string
  }
}

/**
 * テーマ制御機能を提供する型
 */
export interface ThemeControls {
  /** 現在のテーマ (dark/light) */
  theme: 'dark' | 'light'
  /** ピクセルモードの有効/無効 */
  pixelMode: boolean
  /** ネオンモードの有効/無効 */
  neonMode: boolean
  /** テーマを切り替える関数 */
  toggleTheme: () => void
  /** 通常モードに設定する関数 */
  setNormalMode: () => void
  /** ピクセルモードを切り替える関数 */
  togglePixelMode: () => void
  /** ネオンモードを切り替える関数 */
  toggleNeonMode: () => void
}
