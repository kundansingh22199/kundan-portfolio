import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { EMAIL, PHONE, PHONE_TEL } from '../../data/contact.js'

export default function Contact({ home = false }) {
  return (
    <section className={`studio-contact ${home ? 'studio-contact-home' : 'studio-contact-page-content'}`}>
      <div className="studio-contact-layout">
        <div className="studio-contact-panel">
          <p className="studio-eyebrow"><span /> {home ? 'HAVE A PROJECT IN MIND?' : 'DIRECT CONTACT'}</p>
          <h2>{home ? <>Let&apos;s build<br /><span>something great.</span></> : <>Let&apos;s talk<br /><span>about your idea.</span></>}</h2>
          <p className="studio-contact-intro-copy">
            {home
              ? 'Tell me what you’re working on. I build dependable web applications and backend systems for real business needs.'
              : 'Email or call me directly. I’m happy to hear about your project, answer a question, or simply connect.'}
          </p>
          <a className="studio-button studio-button-primary" href={`mailto:${EMAIL}`}>Start a conversation <ArrowUpRight size={16} /></a>
          {!home && <Link className="studio-contact-portfolio" to="/portfolio">Explore the developer portfolio <ArrowRight size={15} /></Link>}
          <div className="studio-contact-social">
            <p className="studio-eyebrow">FIND ME AROUND THE WEB</p>
            <div className="studio-social-links" aria-label="Social profiles">
              <a href="https://www.linkedin.com/in/kundan-kumar-singh-757a6b258" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://github.com/kundansingh22199" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.instagram.com/kundansingh_0422" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/kundanrajpoot.0422" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href={`https://wa.me/${PHONE_TEL.replace('+', '')}?text=Hi%20Kundan`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="studio-contact-cards">
          <a className="studio-contact-card" href={`mailto:${EMAIL}`}>
            <span className="studio-contact-card-icon"><Mail size={19} aria-hidden="true" /></span>
            <span className="studio-contact-card-copy"><small>EMAIL</small><strong>{EMAIL}</strong><span>Project enquiries and questions</span></span>
            <ArrowUpRight className="studio-contact-card-arrow" size={17} aria-hidden="true" />
          </a>
          <a className="studio-contact-card" href={`tel:${PHONE_TEL}`}>
            <span className="studio-contact-card-icon"><Phone size={19} aria-hidden="true" /></span>
            <span className="studio-contact-card-copy"><small>PHONE / WHATSAPP</small><strong>{PHONE}</strong><span>Call or send a message</span></span>
            <ArrowUpRight className="studio-contact-card-arrow" size={17} aria-hidden="true" />
          </a>
          <article className="studio-contact-card">
            <span className="studio-contact-card-icon"><MapPin size={19} aria-hidden="true" /></span>
            <span className="studio-contact-card-copy"><small>BASED IN</small><strong>Akshardham, New Delhi</strong><span>Delhi · Noida · Gurugram</span></span>
          </article>
        </div>
      </div>
      <div className="studio-contact-watermark">K<span>.</span></div>
    </section>
  )
}
