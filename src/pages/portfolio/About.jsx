import { PREFERRED_LOCATIONS, STATS, SUMMARY, WORK_MODES } from '../../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="section-head">
        <p className="section-eyebrow">01 — About</p>
        <h2>Backend problems, solved with <span className="accent-italic">clean architecture</span></h2>
      </div>
      <div className="about-grid">
        <div className="bio-card">
          <p>{SUMMARY}</p>
          <div className="mini-tags"><span>Comfortable working independently</span><span>Cross-functional teams</span><span>On-schedule delivery</span></div>
          <p className="sig">— Kundan Kumar</p>
        </div>
        <div className="poster-card"><img src="/about-poster.jpeg" alt="Kundan Kumar .NET Developer portfolio poster" /></div>
        {STATS.map((stat, index) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-icon">{index === 0 ? '◎' : index === 1 ? '▣' : '◈'}</span>
            <div className="stat-body"><strong>{stat.value}</strong><span>{stat.label}</span></div>
          </div>
        ))}
        <div className="availability-card">
          <div className="availability-head"><span>Work preference</span><strong>Immediate joiner</strong></div>
          <div className="availability-body">
            <h3>Open to all types of work</h3>
            <div className="work-modes">{WORK_MODES.map((mode) => <span key={mode}>{mode}</span>)}</div>
          </div>
          <p className="location-line">{PREFERRED_LOCATIONS.join(' · ')}</p>
        </div>
        <div className="education-card">
          <span className="edu-icon">◌</span>
          <div><h3>BCA — Computer Applications</h3><p>Indira Gandhi National Open University (IGNOU)</p><small>Graduated Dec 2020</small></div>
        </div>
      </div>
    </section>
  )
}
