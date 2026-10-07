import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PROJECTS = [
  { name: 'Mparchi', kind: 'Commerce platform', url: 'https://mparchi.com', accent: 'work-art-orange', mark: 'M' },
  { name: 'NvShoppe', kind: 'E-commerce experience', url: 'https://nvshoppe.com', accent: 'work-art-blue', mark: 'N' },
  { name: 'Sanatan Bhakti Cloud', kind: 'Digital platform', url: 'https://sanatanbhakticloud.com', accent: 'work-art-green', mark: 'S' },
]

export default function Work({ home = false }) {
  return (
    <section className="studio-section studio-work">
      {home && (
        <div className="studio-section-heading studio-work-heading">
          <p className="studio-eyebrow">03 — SELECTED WORK</p>
          <div>
            <h2>Made to work<br /><span>in the real world.</span></h2>
            <p>Live products and platforms supported by practical engineering and dependable systems.</p>
          </div>
        </div>
      )}
      <div className="studio-work-grid">
        {PROJECTS.map((project, index) => (
          <a className="studio-work-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
            <div className={`studio-work-art ${project.accent}`}>
              <span className="studio-work-number">0{index + 1} / SELECTED PROJECT</span>
              <span className="studio-work-mark">{project.mark}</span>
              <span className="studio-work-open"><ArrowUpRight size={18} /></span>
            </div>
            <div className="studio-work-caption"><h3>{project.name}</h3><span>{project.kind}</span></div>
          </a>
        ))}
      </div>
      <Link className="studio-button studio-button-outline" to="/portfolio">
        Explore the full portfolio <ArrowRight size={16} />
      </Link>
    </section>
  )
}
