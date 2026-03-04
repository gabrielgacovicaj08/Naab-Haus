import { useEffect, useRef } from 'react'
import './Experience.css'
import { useTranslation } from '../hooks/useTranslation'

const IMAGES = [
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80',
]

export default function Experience() {
  const { t } = useTranslation()
  const blocks = t('experience.blocks')
  const blockRefs = useRef([])

  useEffect(() => {
    const observers = blockRefs.current.map((block) => {
      if (!block) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            block.classList.add('experience__block--visible')
            observer.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(block)
      return observer
    })
    return () => observers.forEach((obs) => obs && obs.disconnect())
  }, [blocks])

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <h2 className="experience__heading">{t('experience.heading')}</h2>
        {blocks.map((block, i) => {
          const reversed = i % 2 === 1
          return (
            <div
              key={i}
              className={`experience__block${reversed ? ' experience__block--reversed' : ''}`}
              ref={(el) => { blockRefs.current[i] = el }}
            >
              <div className="experience__image-wrap">
                <img
                  src={IMAGES[i]}
                  alt={block.title}
                  className="experience__image"
                />
              </div>
              <div className="experience__text">
                <h3 className="experience__title">{block.title}</h3>
                <p className="experience__paragraph">{block.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
