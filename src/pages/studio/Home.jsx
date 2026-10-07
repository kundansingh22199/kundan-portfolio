import { ArrowDown, ArrowUpRight, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="studio-hero" id="home">
        <div className="studio-hero-copy">
          <p className="studio-eyebrow"><span /> PRACTICAL SOFTWARE · NEW DELHI, INDIA</p>
          <h1>Technology for<br />the work that<br /><span>moves you forward.</span></h1>
          <div className="studio-hero-bottom">
            <p>I build dependable web applications and backend systems that make everyday business work simpler, clearer, and more connected.</p>
            <div className="studio-hero-actions">
              <Link to="/services" className="studio-button studio-button-primary">Explore my services <ArrowDown size={16} /></Link>
              <Link to="/portfolio" className="studio-text-link">Developer portfolio <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
        <div className="studio-hero-art" aria-label="Abstract illustration of connected digital systems">
          <div className="studio-art-orbit orbit-one" />
          <div className="studio-art-orbit orbit-two" />
          <div className="studio-art-core"><span>K</span><i /></div>
          <span className="studio-art-label label-api">WEB API <b>●</b></span>
          <span className="studio-art-label label-data"><Database size={14} /> SQL SERVER</span>
          <span className="studio-art-label label-cloud">WEB APPLICATION</span>
          <div className="studio-art-caption"><span>BUILT WITH PURPOSE</span><span>01 / 04</span></div>
        </div>
        <div className="studio-hero-index"><span>01</span><span>BUILDING WITH INTENTION</span></div>
      </section>
      <div className="studio-trust-strip">
        <span>BUILT ON EXPERIENCE</span>
        <b>.NET & C#</b><i /> <b>SQL SERVER</b><i /> <b>PAYMENT SYSTEMS</b><i /> <b>PRODUCTION-READY APIs</b>
      </div>
    </>
  )
}
