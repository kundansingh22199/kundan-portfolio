const STEPS = [
  ['01 / LISTEN', 'Understand first.', 'Start with your goals, constraints, and the people the product needs to serve.'],
  ['02 / SHAPE', 'Design the right fit.', 'Agree on a practical plan, architecture, and milestones before the build begins.'],
  ['03 / DELIVER', 'Build with care.', 'Ship maintainable software in clear steps, with communication throughout.'],
]

export default function Approach({ home = false }) {
  return (
    <section className="studio-section studio-approach">
      {home && (
        <div className="studio-section-heading">
          <p className="studio-eyebrow">05 — HOW I WORK</p>
          <div><h2>Clear thinking.<br /><span>Careful delivery.</span></h2><p>A straightforward process from the first conversation through launch.</p></div>
        </div>
      )}
      <div className="studio-approach-grid">
        {STEPS.map(([step, title, description]) => (
          <article key={step}><span>{step}</span><h3>{title}</h3><p>{description}</p></article>
        ))}
      </div>
    </section>
  )
}
