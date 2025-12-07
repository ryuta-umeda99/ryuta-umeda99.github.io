import { Project } from '../types'

/**
 * ProjectCardコンポーネントのProps
 */
interface ProjectCardProps {
  /** 表示するプロジェクト情報 */
  project: Project
  /** アニメーション遅延用のインデックス */
  index: number
}

/**
 * プロジェクトカードコンポーネント
 * プロジェクトのタイトル、説明、技術タグ、リンクを表示
 * 
 * @param props - ProjectCardProps
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-tags">
        {project.tech.map((t, i) => (
          <img key={i} src={t} alt="tech" />
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        詳細を見る →
      </a>
    </div>
  )
}
