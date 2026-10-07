import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="studio-about">
      <div className="studio-about-index"><span>04</span><span>ABOUT KUNDAN</span></div>
      <div className="studio-about-copy">
        <p className="studio-eyebrow">HANDS-ON SOFTWARE ENGINEERING</p>
        <h2>Useful technology<br />starts with <span>understanding.</span></h2>
        <p>Kundan Kumar is a .NET software developer with four years of production experience. I work closely with teams to understand their day-to-day needs and build software that is clear, dependable, and made to last.</p>
        <Link className="studio-text-link" to="/portfolio">Get to know Kundan <ArrowUpRight size={16} /></Link>
      </div>
      <div className="studio-about-stat"><strong>04<span>+</span></strong><span>YEARS BUILDING<br />PRODUCTION SOFTWARE</span></div>
    </section>
  )
}
