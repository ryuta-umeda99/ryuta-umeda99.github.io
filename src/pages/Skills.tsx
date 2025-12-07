import { TechSlider } from '../components'
import { TECH_BADGES, getTechName } from '../constants'

interface SkillsProps {
  onTechClick: (tech: string) => void
}

export default function Skills({ onTechClick }: SkillsProps) {
  const handleTechClick = (url: string) => onTechClick(getTechName(url))

  const skillCategories = [
    { title: 'Languages & Frameworks', badges: TECH_BADGES.languages },
    { title: 'Infrastructure / DevOps', badges: TECH_BADGES.infrastructure },
    { title: 'Database', badges: TECH_BADGES.database },
    { title: 'Other', badges: TECH_BADGES.other }
  ]

  return (
    <div className="page">
      <div className="profile-card">
        <h2 className="section-title">Skill Set</h2>
        <div className="section-content">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <h3>{category.title}</h3>
              <TechSlider badges={category.badges} onTechClick={handleTechClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
