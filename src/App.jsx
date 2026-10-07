import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { EMAIL, PHONE, PHONE_TEL, RESUME_URL } from './data/contact.js'
import PortfolioAbout from './pages/portfolio/About.jsx'
import PortfolioExperience from './pages/portfolio/Experience.jsx'
import PortfolioProjects from './pages/portfolio/Projects.jsx'
import PortfolioSkills from './pages/portfolio/Skills.jsx'
import PortfolioContact from './pages/portfolio/Contact.jsx'
import PortfolioHome from './pages/portfolio/Home.jsx'
import StudioHome from './pages/studio/Home.jsx'
import StudioServices from './pages/studio/Services.jsx'
import StudioSolutions from './pages/studio/Solutions.jsx'
import StudioWork from './pages/studio/Work.jsx'
import StudioAbout from './pages/studio/About.jsx'
import StudioApproach from './pages/studio/Approach.jsx'
import StudioContact from './pages/studio/Contact.jsx'
import './App.css'

export { EMAIL, PHONE, PHONE_TEL, RESUME_URL }
const CURRENT_YEAR = new Date().getFullYear()

const NAV_LINKS = [
  { number: '01', label: 'About', href: '/portfolio/about', id: 'about' },
  { number: '02', label: 'Experience', href: '/portfolio/experience', id: 'experience' },
  { number: '03', label: 'Projects', href: '/portfolio/projects', id: 'projects' },
  { number: '04', label: 'Skills', href: '/portfolio/skills', id: 'skills' },
  { number: '05', label: 'Contact', href: '/portfolio/contact', id: 'contact' },
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

function NavigationLink({ link, activePage, onClick, numbered = false }) {
  const content = numbered ? <><span>{link.number}</span>{link.label}</> : link.label

  if (activePage === '/') {
    return <a href={`#${link.id}`} onClick={onClick}>{content}</a>
  }

  return <NavLink to={link.href} onClick={onClick}>{content}</NavLink>
}

const STUDIO_NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'Portfolio', href: '/portfolio', route: true },
  { label: 'About', href: '/about' },
  { label: 'Approach', href: '/approach' },
  { label: 'Contact', href: '/contact' },
]

function StudioLogo() {
  return <Logo />
}

function StudioNavigationLink({ item, onClick }) {
  const className = item.label === 'Portfolio' ? 'studio-nav-portfolio' : undefined
  return <Link className={className} to={item.href} onClick={onClick}>{item.label}</Link>
}

const STUDIO_PAGES = {
  '/': 'home',
  '/services': 'services',
  '/solutions': 'solutions',
  '/work': 'work',
  '/about': 'about',
  '/approach': 'approach',
  '/contact': 'contact',
}

const STUDIO_PAGE_HEADINGS = {
  services: { index: '01', eyebrow: 'WHAT WE DO', title: <>Practical software.<br /><span>Built to deliver.</span></>, lead: 'From a first API to a complete application, we focus on useful technology that solves real business needs.' },
  solutions: { index: '02', eyebrow: 'WHO WE HELP', title: <>Technology for the work<br /><span>that matters.</span></>, lead: 'We focus on everyday business challenges and build tools that help your people do their best work.' },
  work: { index: '03', eyebrow: 'SELECTED WORK', title: <>Made to work<br /><span>in the real world.</span></>, lead: 'A selection of live products and platforms supported by practical engineering and dependable systems.' },
  about: { index: '04', eyebrow: 'ABOUT KUNDAN', title: <>Meet Kundan<br /><span>Kumar.</span></>, lead: 'Independent, hands-on software development grounded in four years of production experience.' },
  approach: { index: '05', eyebrow: 'HOW I WORK', title: <>Clear thinking.<br /><span>Careful delivery.</span></>, lead: 'A practical, collaborative process that keeps the work focused and the outcome dependable.' },
  contact: { index: '06', eyebrow: 'CONTACT', title: <>Let&apos;s make<br /><span>it work.</span></>, lead: 'For project enquiries, collaborations, or questions, get in touch. I’d be glad to hear from you.' },
}

const STUDIO_PAGE_TITLES = {
  services: 'Services',
  solutions: 'Solutions',
  work: 'Selected Work',
  about: 'About',
  approach: 'Approach',
  contact: 'Contact',
}

function StudioPageHeading({ page }) {
  const heading = STUDIO_PAGE_HEADINGS[page]
  if (!heading) return null

  return (
    <header className="studio-page-heading">
      <p className="studio-eyebrow"><span /> {heading.index} — {heading.eyebrow}</p>
      <h1>{heading.title}</h1>
      <p>{heading.lead}</p>
    </header>
  )
}

function StudioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const page = STUDIO_PAGES[pathname] || 'home'

  return (
    <div className={`studio-shell studio-page-${page}`}>
      <header className="studio-header">
        <div className="studio-header-inner">
          <StudioLogo />
          <nav className="studio-nav" aria-label="Main navigation">
            {STUDIO_NAV.map((item) => <StudioNavigationLink key={item.label} item={item} />)}
          </nav>
          <Link className="studio-header-cta" to="/contact">
            Contact me <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            className="studio-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="studio-mobile-nav" aria-label="Mobile navigation">
            {STUDIO_NAV.map((item) => (
              <StudioNavigationLink key={item.label} item={item} onClick={() => setMenuOpen(false)} />
            ))}
            <Link className="studio-mobile-cta" to="/contact" onClick={() => setMenuOpen(false)}>
              Contact me <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>

      <main className="studio-main">
        {page === 'home' && <StudioHome />}

        {page !== 'home' && <StudioPageHeading page={page} />}

        {(page === 'home' || page === 'services') && <StudioServices home={page === 'home'} />}
        {(page === 'home' || page === 'solutions') && <StudioSolutions home={page === 'home'} />}
        {(page === 'home' || page === 'work') && <StudioWork home={page === 'home'} />}
        {(page === 'home' || page === 'about') && <StudioAbout />}
        {(page === 'home' || page === 'approach') && <StudioApproach home={page === 'home'} />}
        {(page === 'home' || page === 'contact') && <StudioContact home={page === 'home'} />}
      </main>

      <footer className="studio-footer">
        <StudioLogo />
        <span>Independent software studio · New Delhi, India</span>
        <div><Link to="/portfolio">Portfolio</Link><a href={`mailto:${EMAIL}`}>Email</a><span>© {CURRENT_YEAR} Kundan Kumar</span></div>
      </footer>
    </div>
  )
}

function App() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState('')
  const isPortfolioPage = pathname === '/portfolio' || pathname.startsWith('/portfolio/')
  const portfolioPath = pathname === '/portfolio' ? '/' : pathname.replace('/portfolio', '')
  const activePage = pathname === '/portfolio'
    ? '/portfolio-home'
    : NAV_LINKS.some((link) => link.href === pathname)
      ? portfolioPath
      : '/'

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
    document.title = isPortfolioPage
      ? 'Kundan Kumar — .NET Developer | Portfolio'
      : pathname === '/'
        ? 'Kundan Kumar — Software Developer | Web & .NET Solutions'
        : `Kundan Kumar — ${STUDIO_PAGE_TITLES[STUDIO_PAGES[pathname]] || 'Software Developer'}`
  }, [pathname, isPortfolioPage])

  if (!isPortfolioPage) {
    return <StudioWebsite />
  }

  return (
    <div className={`app-shell ${activePage === '/' || activePage === '/portfolio-home' ? 'home-shell' : ''} ${activePage === '/projects' ? 'projects-shell' : ''}`}>
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
              <a href={RESUME_URL} target="_blank" rel="noreferrer">Download resume ↗</a>
            </div>
          </div>
        )}
      </header>

      <main className="main-content">
        {(activePage === '/' || activePage === '/portfolio-home') && (
          <>
            <PortfolioHome />
          </>
        )}

        {(activePage === '/about' || activePage === '/portfolio-home') && <PortfolioAbout />}
        {(activePage === '/experience' || activePage === '/portfolio-home') && <PortfolioExperience />}
        {(activePage === '/projects' || activePage === '/portfolio-home') && <PortfolioProjects />}
        {(activePage === '/skills' || activePage === '/portfolio-home') && <PortfolioSkills />}

        {(activePage === '/contact' || activePage === '/portfolio-home') && <PortfolioContact copyFeedback={copyFeedback} onCopy={copyContact} />}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Logo />
          <p>Contribute · Learn · Grow — with a great team</p>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href={`tel:${PHONE_TEL}`}>Phone</a>
            <a href="https://github.com/kundansingh22199" target="_blank" rel="noreferrer">GitHub</a>
            <span>© {CURRENT_YEAR} Kundan Kumar</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
