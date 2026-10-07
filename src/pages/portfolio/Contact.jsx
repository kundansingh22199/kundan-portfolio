import { Check, Copy } from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { EMAIL, PHONE, PHONE_TEL } from '../../data/contact.js'
import { PREFERRED_LOCATIONS } from '../../data/portfolio.js'

export default function Contact({ copyFeedback, onCopy }) {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-head"><p className="section-eyebrow">05 — Contact</p><h2 /></div>
      <h2 className="contact-heading"><span>Let&apos;s</span><span className="text-stroke">Connect</span><span className="accent-dot">.</span></h2>
      <p className="contact-copy">For project enquiries, collaborations, or questions, <span>get in touch</span>. I&apos;d be glad to hear from you.</p>
      <div className="contact-actions">
        <div className="contact-method">
          <a href={`mailto:${EMAIL}`} className="primary-btn email-btn">{EMAIL}</a>
          <button type="button" className="contact-copy-icon" aria-label="Copy email address" title="Copy email address" onClick={() => onCopy('Email', EMAIL)}>
            {copyFeedback === 'Email copied' ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
        <div className="contact-method">
          <a href={`tel:${PHONE_TEL}`} className="secondary-btn contact-phone-link">{PHONE}</a>
          <button type="button" className="contact-copy-icon" aria-label="Copy phone number" title="Copy phone number" onClick={() => onCopy('Phone', PHONE)}>
            {copyFeedback === 'Phone copied' ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>
      <nav className="social-links" aria-label="Social profiles">
        <a href="https://github.com/kundansingh22199" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on GitHub" title="GitHub"><FaGithub size={20} aria-hidden="true" /></a>
        <a href="https://www.linkedin.com/in/kundan-kumar-singh-757a6b258?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on LinkedIn" title="LinkedIn"><FaLinkedinIn size={20} aria-hidden="true" /></a>
        <a href="https://www.instagram.com/kundansingh_0422?stkn=MTM4bHY1d3RhYmFpMA==" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on Instagram" title="Instagram"><FaInstagram size={20} aria-hidden="true" /></a>
        <a href="https://www.facebook.com/kundanrajpoot.0422" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on Facebook" title="Facebook"><FaFacebookF size={20} aria-hidden="true" /></a>
        <a href={`https://wa.me/${PHONE_TEL.replace('+', '')}?text=Hi%20Kundan%2C%20I%27d%20like%20to%20discuss%20an%20opportunity.`} className="whatsapp-btn" target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat" title="WhatsApp"><FaWhatsapp size={20} aria-hidden="true" /></a>
      </nav>
      <p className={`copy-feedback${copyFeedback.startsWith('Unable') ? ' is-error' : ''}`} role="status" aria-live="polite">{copyFeedback}</p>
      <div className="contact-grid">
        <div className="contact-tile"><span>📍</span><p>Current location</p><strong>Akshardham, New Delhi</strong></div>
        <div className="contact-tile"><span>🌐</span><p>Preferred locations</p><strong>{PREFERRED_LOCATIONS.join(' · ')}</strong></div>
      </div>
    </section>
  )
}
