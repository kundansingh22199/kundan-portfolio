import { ArrowUpRight } from 'lucide-react'

const SOLUTIONS = [
  ['01', 'Everyday operations', 'Make recurring tasks more consistent with tailored applications and connected workflows.'],
  ['02', 'Digital product teams', 'Move product work forward with reliable backend engineering and API development.'],
  ['03', 'Commerce & platforms', 'Bring customer experiences, payment services, and business systems together.'],
]

export default function Solutions({ home = false }) {
  return (
    <section className="studio-section studio-solutions">
      {home && (
        <div className="studio-section-heading">
          <p className="studio-eyebrow">02 — WHO I HELP</p>
          <div>
            <h2>Technology for the work<br /><span>that matters.</span></h2>
            <p>I focus on everyday business challenges and build tools that help people do their best work.</p>
          </div>
        </div>
      )}
      <div className="studio-solution-list">
        {SOLUTIONS.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
            <ArrowUpRight aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
