import { PROFILE } from '../constants'

export default function About() {
  return (
    <div className="page">
      {PROFILE.image && (
        <div className="profile-header">
          <img src={PROFILE.image} alt={PROFILE.name} className="profile-image" />
        </div>
      )}
      
      <div className="profile-card">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <div className="about-intro">
            <h1 className="intro-title">{PROFILE.title}</h1>
            <p className="subtitle-text">{PROFILE.subtitle}</p>
            <div className="intro-description">
              <p>{PROFILE.experience}</p>
              <p>{PROFILE.description}</p>
              <div className="tagline-box">
                <strong>"{PROFILE.tagline}"</strong>
                <span>として活動しています</span>
              </div>
            </div>
          </div>
          
          <div className="expertise-section">
            <h3>得意領域</h3>
            <div className="expertise-grid">
              {PROFILE.expertise.map((item, i) => (
                <div key={i} className="expertise-item">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <h2 className="section-title">資格</h2>
        <div className="section-content">
          <div className="certifications">
            {PROFILE.certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                {cert.icon && <img src={cert.icon} alt={cert.name} className="cert-icon" />}
                <div className="cert-info">
                  <strong>{cert.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-card">
        <h2 className="section-title">Contact</h2>
        <div className="section-content">
          <p>GitHub: <a href={PROFILE.contact.github} target="_blank" rel="noopener noreferrer">{PROFILE.contact.username}</a></p>
        </div>
      </div>
    </div>
  )
}
