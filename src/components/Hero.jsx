import { useEffect, useRef } from 'react'
import './Hero.css'
import { useTranslation } from '../hooks/useTranslation'

const BOOKING_URL = '#'
const HERO_IMAGE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'

export default function Hero() {
  const { t } = useTranslation()
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const offset = window.scrollY * 0.3
      parallaxRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <div ref={parallaxRef} className="hero__parallax">
        <div
          className="hero__bg"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
      </div>
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
