import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Navbar.css'

const NAV_LINKS = [
  { key: 'home', id: 'home' },
  { key: 'features', id: 'features' },
  { key: 'gallery', id: 'gallery' },
  { key: 'experience', id: 'experience' },
  { key: 'location', id: 'location' },
]

function Navbar() {
  const { t, lang, toggleLang } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollToSection('home')} aria-label="Go to top">
          NaabHaus
        </button>

        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ key, id }) => (
            <button key={key} className="navbar__link" onClick={() => scrollToSection(id)}>
              {t(`nav.${key}`)}
            </button>
          ))}
          <a href="#" className="navbar__book-btn">
            {t('nav.bookNow')}
          </a>
          <button className="navbar__lang navbar__lang--mobile" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'en' ? 'IT' : 'EN'}
          </button>
        </nav>

        <div className="navbar__actions">
          <button className="navbar__lang" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'en' ? 'IT' : 'EN'}
          </button>
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
