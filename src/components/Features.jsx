import { useEffect, useRef } from 'react'
import './Features.css'
import { useTranslation } from '../hooks/useTranslation'

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items')
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, i) => {
      if (!card) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            card.style.transitionDelay = `${i * 0.1}s`
            card.classList.add('features__card--visible')
            observer.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      observer.observe(card)
      return observer
    })
    return () => observers.forEach((obs) => obs && obs.disconnect())
  }, [items])

  return (
    <section id="features" className="features">
      <div className="features__inner">
        <h2 className="features__heading">{t('features.heading')}</h2>
        <div className="features__grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="features__card"
              ref={(el) => { cardRefs.current[i] = el }}
            >
              <span className="features__icon">{item.icon}</span>
              <h3 className="features__title">{item.title}</h3>
              <p className="features__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
