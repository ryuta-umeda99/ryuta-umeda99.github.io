import { useAnimatedNumber } from '../hooks'
import { PROFILE } from '../constants'
import Typewriter from 'typewriter-effect'

export default function Home() {
  const years = useAnimatedNumber(4)
  const techs = useAnimatedNumber(10)

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">
          <Typewriter
            options={{
              strings: [PROFILE.name],
              autoStart: true,
              loop: true,
              delay: 200,
              deleteSpeed: 150,
              cursor: '|'
            }}
          />
        </h1>
        <p className="hero-subtitle">{PROFILE.title}</p>
        <p className="hero-description">{PROFILE.subtitle}</p>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>{years}+</h3>
            <p>年の実務経験</p>
          </div>
          <div className="stat-item">
            <h3>{techs}+</h3>
            <p>技術スタック</p>
          </div>
          <div className="stat-item">
            <h3>∞</h3>
            <p>プロジェクト</p>
          </div>
        </div>
        <div className="hero-contact">
          <h2>Contact</h2>
          <p>GitHub: <a href={PROFILE.contact.github} target="_blank" rel="noopener noreferrer">{PROFILE.contact.username}</a></p>
        </div>
      </div>
    </div>
  )
}
