import { Project } from '../types'

/**
 * ポートフォリオに表示するプロジェクト一覧
 * 各プロジェクトはタイトル、説明、リンク、使用技術を含む
 */
export const PROJECTS: Project[] = [
  {
    title: "プロジェクト1",
    description: "React + Viteで作成したWebアプリケーション",
    link: "#",
    tech: [
      "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black",
      "https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black"
    ]
  },
  {
    title: "プロジェクト2",
    description: "モダンなUIを持つポートフォリオサイト",
    link: "#",
    tech: [
      "https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black"
    ]
  },
  {
    title: "プロジェクト3",
    description: "GitHub Pagesでホスティングされたサイト",
    link: "#",
    tech: [
      "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black",
      "https://img.shields.io/badge/GitHub_Pages-181717?logo=github&logoColor=white"
    ]
  }
]
