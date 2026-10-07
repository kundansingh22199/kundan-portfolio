import { Link } from 'react-router-dom'
import { RESUME_URL } from '../../data/contact.js'
import { MARQUEE_ITEMS } from '../../data/portfolio.js'

export default function Home() {
  return (
    <>
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="hero-badge">Open to work — Immediate joiner</p>
          <h1><span className="block">Kundan</span><span className="block text-stroke">Kumar</span><span className="block accent-line"><span className="line-fill">.NET Developer</span></span></h1>
          <p className="hero-summary">Passionate about building <span>scalable, efficient</span> and <span>user-friendly</span> web applications and backend services — with <em>4 years</em> of production experience.</p>
          <div className="hero-actions">
            <Link to="/portfolio/projects" className="primary-btn">View projects</Link>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="secondary-btn">Download résumé</a>
          </div>
          <ul className="hero-meta"><li>Akshardham, New Delhi</li><li>Notice period: Immediate</li><li>Delhi · Noida · Gurugram · All India</li></ul>
        </div>
        <div className="hero-portrait" aria-label="Portfolio portrait">
          <div className="portrait-frame"><img src="/hero-portrait.jpeg" alt="Kundan Kumar — .NET Developer" /></div>
          <span className="floating-chip chip-a">◆ .NET Core 8</span><span className="floating-chip chip-b">◆ SQL Server</span><span className="floating-chip chip-c">◆ REST API</span>
        </div>
      </section>
      <div className="marquee-wrap" aria-label="Technology stack">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => <span key={`${item}-${index}`} className="marquee-item">{item}<span>◆</span></span>)}
        </div>
      </div>
    </>
  )
}
