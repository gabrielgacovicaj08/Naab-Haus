import { useFadeInOnScroll } from '../hooks/useReveal'
import { useTranslation } from '../hooks/useTranslation'
import './Location.css'

const DEST_PHOTOS = [
  'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600',
]

export default function Location() {
  const { t, te, lang } = useTranslation()
  const sectionRef = useFadeInOnScroll('location--visible')
  const highlights = t('location.highlights')
  const highlightsEn = lang === 'it' ? te('location.highlights') : null
  const destinations = t('location.destinations')

  return (
    <section id="location" className="location">
      <div ref={sectionRef} className="location__inner">
        <h2 className="location__heading">{t('location.heading')}</h2>
        <p className="location__description">{t('location.description')}</p>

        <div className="location__content">
          <ul className="location__highlights">
            {highlights.map((item, i) => (
              <li key={i} className="location__highlight-item">
                <span
                  className="location__highlight-label"
                  {...(highlightsEn ? { 'data-tooltip': highlightsEn[i].label } : {})}
                >
                  {item.label}
                </span>
                <span className="location__highlight-distance">{item.distance}</span>
              </li>
            ))}
          </ul>

          <div className="location__map">
            <iframe
              title="NaabHaus location"
              src="https://maps.google.com/maps?q=Via+La+Marmora,+07026+Olbia,+OT,+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="location__destinations">
          <h3 className="location__dest-heading">{destinations.heading}</h3>
          <div className="location__dest-grid">
            {destinations.items.map((dest, i) => (
              <div key={i} className="location__dest-card">
                <div className="location__dest-img-wrap">
                  <img
                    src={DEST_PHOTOS[i]}
                    alt={dest.label}
                    className="location__dest-img"
                    loading="lazy"
                  />
                </div>
                <div className="location__dest-info">
                  <span className="location__dest-label">{dest.label}</span>
                  <span className="location__dest-distance">{dest.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
