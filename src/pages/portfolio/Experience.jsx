import { EXPERIENCE } from '../../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" className="content-section timeline-section">
      <div className="section-head">
        <p className="section-eyebrow">02 — Experience</p>
        <h2>Four years on <span className="accent-italic">production code</span></h2>
      </div>
      <div className="experience-list">
        {EXPERIENCE.map((job) => (
          <article key={job.id} className="experience-card">
            <span className={`job-dot ${job.current ? 'active' : ''}`} />
            <div className="experience-inner">
              <div className="role-head">
                <div><h3>{job.role}</h3><p>{job.company}</p></div>
                <span className={`period ${job.current ? 'current' : ''}`}>{job.period}</span>
              </div>
              <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <div className="chip-row">{job.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
