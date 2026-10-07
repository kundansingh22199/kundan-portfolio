import { SKILLS } from '../../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="content-section skills-section">
      <div className="section-head">
        <p className="section-eyebrow">04 — Technical skills</p>
        <h2>The <span className="accent-italic">toolkit</span> behind the APIs</h2>
      </div>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.id} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{group.id === 'backend' ? '⌘' : group.id === 'database' ? '◫' : group.id === 'frontend' ? '▤' : group.id === 'payments' ? '◍' : '◇'}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>{group.items.map((item) => <li key={item}><span>◆</span> {item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
