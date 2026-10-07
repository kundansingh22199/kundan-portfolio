import { ArrowRight, Layers3, Smartphone, Workflow, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    number: '01',
    icon: <Workflow aria-hidden="true" />,
    title: 'Web application development',
    description: 'Purpose-built web experiences, from first screen to the business logic behind every workflow.',
    tags: ['ASP.NET Core', 'C#', 'JavaScript'],
  },
  {
    number: '02',
    icon: <Layers3 aria-hidden="true" />,
    title: 'APIs & backend systems',
    description: 'Reliable, well-structured APIs designed to connect products, teams, and the services they depend on.',
    tags: ['REST APIs', '.NET 8', 'Clean architecture'],
  },
  {
    number: '03',
    icon: <Database aria-hidden="true" />,
    title: 'Data & integrations',
    description: 'Thoughtful database design and secure payment integrations that make complex systems work together.',
    tags: ['SQL Server', 'Payments', 'Integrations'],
  },
  {
    number: '04',
    icon: <Smartphone aria-hidden="true" />,
    title: 'Product engineering',
    description: 'Practical engineering support to improve, extend, and maintain products as your business grows.',
    tags: ['Modernization', 'Maintenance', 'Delivery'],
  },
]

export default function Services({ home = false }) {
  return (
    <section className="studio-section studio-services">
      {home && (
        <div className="studio-section-heading">
          <p className="studio-eyebrow">01 — WHAT I DO</p>
          <div>
            <h2>Practical software.<br /><span>Built to deliver.</span></h2>
            <p>From a first API to a complete application, I focus on useful technology that solves real business needs.</p>
          </div>
        </div>
      )}
      <div className="studio-service-grid">
        {SERVICES.map((service) => (
          <article className="studio-service-card" key={service.number}>
            <div className="studio-service-top"><span>{service.number}</span>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="studio-service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
      {!home && (
        <div className="studio-services-cta">
          <div><span>HAVE A PROJECT IN MIND?</span><strong>Let&apos;s find the right solution.</strong></div>
          <Link to="/contact">Talk about your project <ArrowRight size={16} /></Link>
        </div>
      )}
    </section>
  )
}
