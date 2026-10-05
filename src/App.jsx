import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Check, Copy, Download } from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import './App.css'

export const RESUME_URL =
  'https://customer-assets-wrfwihn1.emergentagent.net/job_a14f00d8-e4b2-429a-9172-05dae87c796f/artifacts/wqykljah_Kundan%20Resume.pdf'

export const EMAIL = 'kundanmth01@gmail.com'
export const PHONE = '+91 97985 01225'
export const PHONE_TEL = '+919798501225'

export const NAV_LINKS = [
  { number: '01', label: 'About', href: '/about', id: 'about' },
  { number: '02', label: 'Experience', href: '/experience', id: 'experience' },
  { number: '03', label: 'Projects', href: '/projects', id: 'projects' },
  { number: '04', label: 'Skills', href: '/skills', id: 'skills' },
  { number: '05', label: 'Contact', href: '/contact', id: 'contact' },
]

export const MARQUEE_ITEMS = [
  'C#',
  '.NET Core 8',
  'ASP.NET Core',
  'RESTful Web APIs',
  'ASP.NET MVC',
  'SQL Server',
  'Stored Procedures',
  'ADO.NET',
  'Dapper',
  'Razorpay',
  'CCAvenue',
  'Easebuzz',
  'PhonePe',
  'JavaScript',
  'jQuery',
  'Bootstrap',
  'Visual Studio',
  'Postman',
]

export const SUMMARY =
  'Results-driven .NET Developer with 4+ years of hands-on experience designing and building scalable RESTful Web APIs, ASP.NET MVC web applications and backend services using C#, .NET Core and ASP.NET. Proven ability to integrate third-party payment gateways, manage complex SQL Server databases and deliver clean, maintainable code following clean architecture principles.'

export const STATS = [
  { value: '04+', label: 'Years of .NET experience' },
  { value: '05', label: 'Live projects delivered & maintained' },
  { value: '04', label: 'Payment gateways integrated' },
]

export const WORK_MODES = ['Full-time', 'Part-time', 'Hybrid', 'On-site', 'Remote']
export const PREFERRED_LOCATIONS = ['Delhi', 'Noida', 'Gurugram', 'Open to all locations in India']

export const EXPERIENCE = [
  {
    id: 'mnb',
    company: 'MNB Soft Solution',
    role: '.NET Core Developer',
    period: 'Jan 2024 — Present',
    current: true,
    points: [
      'Designed and developed highly scalable RESTful Web APIs using C# and .NET Core 8, strictly adhering to clean architecture principles.',
      'Integrated multiple payment gateways — Razorpay, CCAvenue, Easebuzz and PhonePe — enabling secure and reliable online transactions.',
      'Optimized complex SQL Server queries and stored procedures, significantly improving overall data retrieval performance.',
      'Delivered, deployed and maintained multiple live projects including Mparchi, NvShoppe, MnbPromo and MLM Software.',
    ],
    stack: ['.NET Core 8', 'Web API', 'SQL Server', 'Payment Gateways'],
  },
  {
    id: 'wts',
    company: 'Wts Net India Pvt. Ltd.',
    role: 'ASP.NET Developer',
    period: 'Jun 2022 — Jan 2024',
    current: false,
    points: [
      'Built and maintained responsive web applications utilizing ASP.NET MVC, C# and SQL Server.',
      'Developed and consumed RESTful Web APIs to support dynamic application features and client-side interactions.',
      'Implemented frontend user interfaces leveraging HTML, CSS, JavaScript and Bootstrap for seamless user experiences.',
    ],
    stack: ['ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
  },
]

export const PROJECTS = [
  {
    id: 'mparchi',
    idx: '01',
    name: 'Mparchi',
    url: 'https://mparchi.com',
    desc: 'Developed the backend microservices and logic powering the Mparchi platform using .NET Core Web API.',
    tech: ['.NET Core Web API', 'C#', 'Microservices'],
    img: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?crop=entropy&cs=srgb&fm=jpg&q=85',
    wide: true,
  },
  {
    id: 'nvshoppe',
    idx: '02',
    name: 'NvShoppe',
    url: 'https://nvshoppe.com',
    desc: 'Engineered the RESTful backend architecture for NvShoppe on .NET Core Web API.',
    tech: ['.NET Core', 'REST API', 'SQL Server'],
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=srgb&fm=jpg&q=85',
    wide: false,
  },
  {
    id: 'sanatan-bhakti-cloud',
    idx: '03',
    name: 'Sanatan Bhakti Cloud',
    url: 'https://sanatanbhakticloud.com',
    desc: 'Built full-stack application features for the Sanatan Bhakti Cloud .NET Core web application.',
    tech: ['.NET Core', 'Full-Stack', 'SQL Server'],
    img: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=srgb&fm=jpg&q=85',
    wide: false,
  },
  {
    id: 'studio-batao',
    idx: '04',
    name: 'Studio Batao',
    url: 'https://studiobatao.com',
    desc: 'Integrated frontend and backend functionality across a .NET Core web application and API.',
    tech: ['.NET Core', 'Web API', 'JavaScript'],
    img: 'https://images.unsplash.com/photo-1599837565318-67429bde7162?crop=entropy&cs=srgb&fm=jpg&q=85',
    wide: true,
  },
  {
    id: 'mlm-software',
    idx: '05',
    name: 'MLM Software',
    url: null,
    desc: 'Constructed a complex multi-level marketing platform backend, heavily relying on .NET Core and SQL Server.',
    tech: ['.NET Core', 'SQL Server', 'Stored Procedures'],
    img: 'https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?crop=entropy&cs=srgb&fm=jpg&q=85',
    wide: true,
  },
]

export const SKILLS = [
  {
    id: 'backend',
    title: 'Backend',
    items: ['C#', '.NET Core 8', 'ASP.NET Core Web API', 'ASP.NET MVC', 'ASP.NET (Web Forms)', 'REST'],
  },
  {
    id: 'database',
    title: 'Database',
    items: ['SQL Server', 'Stored Procedures', 'ADO.NET', 'Dapper'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    id: 'payments',
    title: 'Payment Gateways',
    items: ['Razorpay', 'CCAvenue', 'Easebuzz', 'PhonePe'],
  },
  {
    id: 'tools',
    title: 'Tools & Languages',
    items: ['Visual Studio', 'Postman', 'English', 'Hindi'],
  },
]

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Kundan Kumar — home">
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <polygon points="32,3 57,17.5 57,46.5 32,61 7,46.5 7,17.5" fill="#FFB800" />
        <text x="32" y="43" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="30" fontWeight="900" fill="#060B19">
          K
        </text>
      </svg>
      <span className="logo-text">kundan<span>.</span>dev</span>
    </Link>
  )
}

function SectionHead({ index, eyebrow, title }) {
  return (
    <div className="section-head">
      <p className="section-eyebrow">{index} — {eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function NavigationLink({ link, activePage, onClick, numbered = false }) {
  const content = numbered ? <><span>{link.number}</span>{link.label}</> : link.label

  if (activePage === '/') {
    return <a href={`#${link.id}`} onClick={onClick}>{content}</a>
  }

  return <NavLink to={link.href} onClick={onClick}>{content}</NavLink>
}

function App() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState('')
  const activePage = NAV_LINKS.some((link) => link.href === pathname) ? pathname : '/'

  const copyContact = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopyFeedback(`${label} copied`)
    } catch {
      setCopyFeedback(`Unable to copy ${label.toLowerCase()}`)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={`app-shell ${activePage === '/' ? 'home-shell' : ''} ${activePage === '/projects' ? 'projects-shell' : ''}`}>
      <header className="site-header">
        <div className="header-inner">
          <Logo />

          <nav className="main-nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavigationLink key={link.href} link={link} activePage={activePage} />
            ))}
          </nav>

          <div className="header-status">
            <span className="status-pill"><i /> Open to work</span>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="resume-btn">Résumé</a>
          </div>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <nav aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <NavigationLink
                  key={link.href}
                  link={link}
                  activePage={activePage}
                  numbered
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={RESUME_URL} target="_blank" rel="noreferrer">Download résumé ↗</a>
            </div>
          </div>
        )}
      </header>

      <main className="main-content">
        {activePage === '/' && (
          <>
        <section id="top" className="hero-section">
          <div className="hero-copy">
            <p className="hero-badge">Open to work — Immediate joiner</p>

            <h1>
              <span className="block">Kundan</span>
              <span className="block text-stroke">Kumar</span>
              <span className="block accent-line"><span className="line-fill">.NET Dev</span></span>
            </h1>

            <p className="hero-summary">
              Passionate about building <span>scalable, efficient</span> and <span>user-friendly</span> web applications and backend services — with <em>4 years</em> of production experience.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="primary-btn">View projects</Link>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="secondary-btn">Download résumé</a>
            </div>

            <ul className="hero-meta">
              <li>Akshardham, New Delhi</li>
              <li>Notice period: Immediate</li>
              <li>Delhi · Noida · Gurugram · All India</li>
            </ul>
          </div>

          <div className="hero-portrait" aria-label="Portfolio portrait">
            <div className="portrait-frame">
              <img src="/hero-portrait.jpeg" alt="Kundan Kumar — .NET Developer" />
            </div>
            <span className="floating-chip chip-a">◆ .NET Core 8</span>
            <span className="floating-chip chip-b">◆ SQL Server</span>
            <span className="floating-chip chip-c">◆ REST API</span>
          </div>
        </section>

        <div className="marquee-wrap" aria-label="Technology stack">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                {item}
                <span>◆</span>
              </span>
            ))}
          </div>
        </div>
          </>
        )}

        {(activePage === '/' || activePage === '/about') && (
        <section id="about" className="content-section">
          <SectionHead index="01" eyebrow="About" title={<>Backend problems, solved with <span className="accent-italic">clean architecture</span></>} />

          <div className="about-grid">
            <div className="bio-card">
              <p>{SUMMARY}</p>
              <div className="mini-tags">
                <span>Comfortable working independently</span>
                <span>Cross-functional teams</span>
                <span>On-schedule delivery</span>
              </div>
              <p className="sig">— Kundan Kumar</p>
            </div>

            <div className="poster-card">
              <img src="/about-poster.jpeg" alt="Kundan Kumar .NET Developer portfolio poster" />
            </div>

            {STATS.map((stat, index) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-icon">{index === 0 ? '◎' : index === 1 ? '▣' : '◈'}</span>
                <div className="stat-body">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}

            <div className="availability-card">
              <div className="availability-head">
                <span>Work preference</span>
                <strong>Immediate joiner</strong>
              </div>
              <div className="availability-body">
                <h3>Open to all types of work</h3>
                <div className="work-modes">
                  {WORK_MODES.map((mode) => (
                    <span key={mode}>{mode}</span>
                  ))}
                </div>
              </div>
              <p className="location-line">{PREFERRED_LOCATIONS.join(' · ')}</p>
            </div>

            <div className="education-card">
              <span className="edu-icon">◌</span>
              <div>
                <h3>BCA — Computer Applications</h3>
                <p>Indira Gandhi National Open University (IGNOU)</p>
                <small>Graduated Dec 2020</small>
              </div>
            </div>
          </div>
        </section>
        )}

        {(activePage === '/' || activePage === '/experience') && (
        <section id="experience" className="content-section timeline-section">
          <SectionHead index="02" eyebrow="Experience" title={<>Four years on <span className="accent-italic">production code</span></>} />

          <div className="experience-list">
            {EXPERIENCE.map((job) => (
              <article key={job.id} className="experience-card">
                <span className={`job-dot ${job.current ? 'active' : ''}`} />
                <div className="experience-inner">
                  <div className="role-head">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <span className={`period ${job.current ? 'current' : ''}`}>{job.period}</span>
                  </div>

                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="chip-row">
                    {job.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        )}

        {(activePage === '/' || activePage === '/projects') && (
        <section id="projects" className="content-section projects-section">
          <SectionHead index="03" eyebrow="Selected work" title={<>Shipping <span className="accent-italic">live</span> in production</>} />

          <div className="project-grid">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className={`project-card${project.wide ? ' wide' : ''}${project.id === 'mlm-software' ? ' full' : ''}`}
              >
                <div className="project-image">
                  <img src={project.img} alt={project.name} />
                  <span className="project-index">{project.idx}</span>
                </div>

                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    {project.url && (
                      <a className="external-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                  <p>{project.desc}</p>
                  <div className="chip-row">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        )}

        {(activePage === '/' || activePage === '/skills') && (
        <section id="skills" className="content-section skills-section">
          <SectionHead index="04" eyebrow="Technical skills" title={<>The <span className="accent-italic">toolkit</span> behind the APIs</>} />

          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div key={group.id} className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">{group.id === 'backend' ? '⌘' : group.id === 'database' ? '◫' : group.id === 'frontend' ? '▤' : group.id === 'payments' ? '◍' : '◇'}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}><span>◆</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        )}

        {(activePage === '/' || activePage === '/contact') && (
        <section id="contact" className="content-section contact-section">
          <SectionHead index="05" eyebrow="Contact" title="" />
          <h2 className="contact-heading">
            <span>Let&apos;s</span>
            <span className="text-stroke">Connect</span>
            <span className="accent-dot">.</span>
          </h2>

          <p className="contact-copy">
            Looking for an opportunity to <span>contribute</span>, <span>learn</span> & <span>grow</span> with a great team. Tell me about the role — I can join <em>immediately</em>.
          </p>

          <div className="contact-actions">
            <div className="contact-method">
              <a href={`mailto:${EMAIL}`} className="primary-btn email-btn">{EMAIL}</a>
              <button
                type="button"
                className="contact-copy-icon"
                aria-label="Copy email address"
                title="Copy email address"
                onClick={() => copyContact('Email', EMAIL)}
              >
                {copyFeedback === 'Email copied' ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <div className="contact-method">
              <a href={`tel:${PHONE_TEL}`} className="secondary-btn contact-phone-link">{PHONE}</a>
              <button
                type="button"
                className="contact-copy-icon"
                aria-label="Copy phone number"
                title="Copy phone number"
                onClick={() => copyContact('Phone', PHONE)}
              >
                {copyFeedback === 'Phone copied' ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <a href={RESUME_URL} className="secondary-btn resume-download-btn" target="_blank" rel="noreferrer">
              <Download size={17} aria-hidden="true" />
              Download résumé
            </a>
          </div>
          <nav className="social-links" aria-label="Social profiles">
            <a href="https://github.com/kundansingh22199" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on GitHub" title="GitHub">
              <FaGithub size={20} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/kundan-kumar-singh-757a6b258?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on LinkedIn" title="LinkedIn">
              <FaLinkedinIn size={20} aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/kundansingh_0422?stkn=MTM4bHY1d3RhYmFpMA==" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on Instagram" title="Instagram">
              <FaInstagram size={20} aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/kundanrajpoot.0422" target="_blank" rel="noreferrer" aria-label="Kundan Kumar on Facebook" title="Facebook">
              <FaFacebookF size={20} aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${PHONE_TEL.replace('+', '')}?text=Hi%20Kundan%2C%20I%27d%20like%20to%20discuss%20an%20opportunity.`}
              className="whatsapp-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp chat"
              title="WhatsApp"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
            </a>
          </nav>
          <p className={`copy-feedback${copyFeedback.startsWith('Unable') ? ' is-error' : ''}`} role="status" aria-live="polite">{copyFeedback}</p>

          <div className="contact-grid">
            <div className="contact-tile">
              <span>📍</span>
              <p>Current location</p>
              <strong>Akshardham, New Delhi</strong>
            </div>
            <div className="contact-tile">
              <span>🌐</span>
              <p>Preferred locations</p>
              <strong>{PREFERRED_LOCATIONS.join(' · ')}</strong>
            </div>
            <div className="contact-tile">
              <span>⚡</span>
              <p>Notice period</p>
              <strong>Immediate</strong>
            </div>
            <div className="contact-tile">
              <span>✉️</span>
              <p>Open to</p>
              <strong>{WORK_MODES.join(' · ')}</strong>
            </div>
          </div>
        </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Logo />
          <p>Contribute · Learn · Grow — with a great team</p>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href={`tel:${PHONE_TEL}`}>Phone</a>
            <a href="https://github.com/kundansingh22199" target="_blank" rel="noreferrer">GitHub</a>
            <span>© {new Date().getFullYear()} Kundan Kumar</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
