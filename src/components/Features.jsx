import { useStaggeredReveal } from '../hooks/useReveal'
import { useTranslation } from '../hooks/useTranslation'
import './Features.css'

export default function Features() {
  const { t, te, lang } = useTranslation()
  const items = t('features.items')
  const itemsEn = lang === 'it' ? te('features.items') : null
  const cardRefs = useStaggeredReveal('features__card--visible', { stagger: 0.1 })

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
              <h3
                className="features__title"
                {...(itemsEn ? { 'data-tooltip': itemsEn[i].title } : {})}
              >
                {item.title}
              </h3>
              <p className="features__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
