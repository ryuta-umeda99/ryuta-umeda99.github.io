/**
 * 技術バッジのカテゴリ別URL配列の型
 */
interface TechBadges {
  /** 言語・フレームワーク */
  languages: string[]
  /** インフラ・DevOps */
  infrastructure: string[]
  /** データベース */
  database: string[]
  /** その他 */
  other: string[]
}

/**
 * 技術スタックのバッジURL一覧
 * shields.ioのバッジを使用
 */
export const TECH_BADGES: TechBadges = {
  languages: [
    "https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white",
    "https://img.shields.io/badge/Laravel-E74430?logo=laravel&logoColor=white",
    "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white",
    "https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black",
    "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black",
    "https://img.shields.io/badge/SQL-003B57?logo=database&logoColor=white",
    "https://img.shields.io/badge/WordPress-21759B?logo=wordpress&logoColor=white"
  ],
  infrastructure: [
    "https://img.shields.io/badge/AWS-FF9900?logo=amazon-aws&logoColor=white",
    "https://img.shields.io/badge/EC2-FF9900?logo=amazon-aws&logoColor=white",
    "https://img.shields.io/badge/RDS-527FFF?logo=amazon-rds&logoColor=white",
    "https://img.shields.io/badge/S3-DD344C?logo=amazon-s3&logoColor=white",
    "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white",

  ],
  database: [
    "https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white",
    "https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white"
  ],
  other: [
    "https://img.shields.io/badge/Excel-217346?logo=microsoft-excel&logoColor=white",
    "https://img.shields.io/badge/Google_Apps_Script-4285F4?logo=google&logoColor=white",
    "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white",
    "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white"
  ]
}

/**
 * バッジURLから技術名を抽出する
 * 
 * @param url - shields.ioのバッジURL
 * @returns 抽出された技術名
 * 
 * @example
 * ```tsx
 * getTechName('https://img.shields.io/badge/React-61DAFB?logo=react')
 * // => 'React'
 * ```
 */
export const getTechName = (url: string): string => {
  const match = url.match(/badge\/([^-]+)/)
  return match ? match[1] : ''
}
