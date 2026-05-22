import { useStaggeredReveal } from '../hooks/useReveal'
import { useTranslation } from '../hooks/useTranslation'
import './Experience.css'

const IMAGES = [
  'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2733955/pexels-photo-2733955.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/31934689/pexels-photo-31934689.jpeg?auto=compress&cs=tinysrgb&w=800',
]

export default function Experience() {
  const { t } = useTranslation()
  const blocks = t('experience.blocks')
  const blockRefs = useStaggeredReveal('experience__block--visible', { threshold: 0.2 })

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <h2 className="experience__heading">{t('experience.heading')}</h2>
        {blocks.map((block, i) => (
          <div
            key={i}
            className={`experience__block${i % 2 === 1 ? ' experience__block--reversed' : ''}`}
            ref={(el) => { blockRefs.current[i] = el }}
          >
            <div className="experience__image-wrap">
              <img src={IMAGES[i]} alt={block.title} className="experience__image" />
            </div>
            <div className="experience__text">
              <h3 className="experience__title">{block.title}</h3>
              <p className="experience__paragraph">{block.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
