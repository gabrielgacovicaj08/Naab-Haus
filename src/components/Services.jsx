import { useStaggeredReveal } from '../hooks/useReveal'
import { useTranslation } from '../hooks/useTranslation'
import './Services.css'

export default function Services() {
  const { t, te, lang } = useTranslation()
  const items = t('services.items')
  const itemsEn = lang === 'it' ? te('services.items') : null
  const cardRefs = useStaggeredReveal('services__card--visible', { stagger: 0.1 })

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h2 className="services__heading">{t('services.heading')}</h2>
        <p className="services__subheading">{t('services.subheading')}</p>
        <div className="services__grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="services__card"
              ref={(el) => { cardRefs.current[i] = el }}
            >
              <span className="services__icon">{item.icon}</span>
              <h3
                className="services__title"
                {...(itemsEn ? { 'data-tooltip': itemsEn[i].title } : {})}
              >
                {item.title}
              </h3>
              <p className="services__desc">{item.description}</p>
              <a href="mailto:hello@naabhaus.com" className="services__cta">
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
