import { PROJECTS } from '../../data/portfolio.js'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="content-section projects-section">
      <div className="section-head">
        <p className="section-eyebrow">03 — Selected work</p>
        <h2>Shipping <span className="accent-italic">live</span> in production</h2>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className={`project-card${project.wide ? ' wide' : ''}${project.id === 'mlm-software' ? ' full' : ''}`}>
            <div className="project-image">
              <img src={project.img} alt={project.name} />
              <span className="project-index">{project.idx}</span>
            </div>
            <div className="project-body">
              <div className="project-title-row">
                <h3>{project.name}</h3>
                {project.url && <a className="external-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight aria-hidden="true" /></a>}
              </div>
              <p>{project.desc}</p>
              <div className="chip-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
