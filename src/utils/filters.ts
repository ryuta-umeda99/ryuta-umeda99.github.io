import { Project } from '../types'

/**
 * プロジェクトをタイトルと技術でフィルタリングする
 * 
 * @param projects - フィルタリング対象のプロジェクト配列
 * @param searchTitle - タイトル/説明で検索するキーワード
 * @param searchTech - 技術で検索するキーワード
 * @returns フィルタリングされたプロジェクト配列
 * 
 * @example
 * ```tsx
 * const filtered = filterProjects(PROJECTS, 'React', 'JavaScript')
 * ```
 */
export const filterProjects = (projects: Project[], searchTitle: string, searchTech: string): Project[] => {
  return projects.filter(project => {
    // タイトルまたは説明にキーワードが含まれるかチェック
    const titleMatch = !searchTitle || 
      project.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTitle.toLowerCase())
    
    // 技術バッジにキーワードが含まれるかチェック
    const techMatch = !searchTech ||
      project.tech.join(' ').toLowerCase().includes(searchTech.toLowerCase())
    
    return titleMatch && techMatch
  })
}
