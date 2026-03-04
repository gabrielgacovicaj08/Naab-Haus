import { useTranslation } from '../hooks/useTranslation'
import './Footer.css'

const BOOKING_URL = '#'

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'features', href: '#features' },
  { key: 'gallery', href: '#gallery' },
  { key: 'experience', href: '#experience' },
  { key: 'location', href: '#location' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <>
      <section className="cta-banner">
        <h2 className="cta-banner__heading">{t('cta.heading')}</h2>
        <a href={BOOKING_URL} className="cta-banner__button">
          {t('cta.button')}
        </a>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">NaabHaus</span>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer__links">
            <h3 className="footer__links-heading">{t('footer.links')}</h3>
            <ul>
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a href={href}>{t(`nav.${key}`)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h3 className="footer__contact-heading">{t('footer.contact')}</h3>
            <a href={`mailto:${t('footer.email')}`} className="footer__email">
              {t('footer.email')}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </>
  )
}
