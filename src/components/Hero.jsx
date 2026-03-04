import './Hero.css'
import { useTranslation } from '../hooks/useTranslation'

const BOOKING_URL = '#'
const HERO_IMAGE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__headline">{t('hero.headline')}</h1>
        <p className="hero__subheadline">{t('hero.subheadline')}</p>
        <a href={BOOKING_URL} className="hero__cta">
          {t('hero.cta')}
        </a>
      </div>
    </section>
  )
}
