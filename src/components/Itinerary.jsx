import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Itinerary.css'

export default function Itinerary() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(0)

  const tabs = t('itinerary.tabs')
  const plans = t('itinerary.plans')
  const activePlan = plans[activeTab]

  return (
    <section id="itinerary" className="itinerary">
      <div className="itinerary__inner">
        <h2 className="itinerary__heading">{t('itinerary.heading')}</h2>
        <p className="itinerary__subheading">{t('itinerary.subheading')}</p>

        <div className="itinerary__tabs" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeTab === i}
              className={`itinerary__tab${activeTab === i ? ' itinerary__tab--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="itinerary__plan">
          {activePlan.days.map((day, i) => (
            <div key={i} className="itinerary__day">
              <div className="itinerary__day-header">
                <span className="itinerary__day-label">{day.day}</span>
                <h3 className="itinerary__day-title">{day.title}</h3>
              </div>
              <ul className="itinerary__day-items">
                {day.items.map((item, j) => (
                  <li key={j} className="itinerary__day-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
