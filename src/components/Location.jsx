import { useEffect, useRef } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Location.css'

export default function Location() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('location--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const highlights = t('location.highlights')

  return (
    <section id="location" className="location">
      <div ref={sectionRef} className="location__inner">
        <h2 className="location__heading">{t('location.heading')}</h2>
        <p className="location__description">{t('location.description')}</p>

        <div className="location__content">
          <ul className="location__highlights">
            {highlights.map((item, i) => (
              <li key={i} className="location__highlight-item">
                <span className="location__highlight-label">{item.label}</span>
                <span className="location__highlight-distance">{item.distance}</span>
              </li>
            ))}
          </ul>

          <div className="location__map">
            <iframe
              title="NaabHaus location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d9.5!3d41.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1000000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
