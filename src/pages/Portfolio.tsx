import { useState, useEffect } from 'react'
import { ProjectCard, SearchInput } from '../components'
import { PROJECTS } from '../constants'
import { filterProjects } from '../utils/filters'

interface PortfolioProps {
  selectedTech: string
  onClearTech: () => void
}

export default function Portfolio({ selectedTech, onClearTech }: PortfolioProps) {
  const [searchTitle, setSearchTitle] = useState('')
  const [searchTech, setSearchTech] = useState('')

  useEffect(() => {
    if (selectedTech) setSearchTech(selectedTech)
  }, [selectedTech])

  const filteredProjects = filterProjects(PROJECTS, searchTitle, searchTech)

  const handleTechChange = (value: string) => {
    setSearchTech(value)
    onClearTech()
  }

  return (
    <div className="page">
      <h1>ポートフォリオ</h1>
      <div className="search-container">
        <SearchInput 
          value={searchTitle}
          onChange={setSearchTitle}
          placeholder="プロジェクト名で検索..."
        />
        <SearchInput 
          value={searchTech}
          onChange={handleTechChange}
          placeholder="使用言語で検索..."
        />
      </div>
      <div className="projects">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
