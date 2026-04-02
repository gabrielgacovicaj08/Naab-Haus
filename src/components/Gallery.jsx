import { useState, useEffect, useRef, useCallback } from 'react'
import './Gallery.css'
import { useTranslation } from '../hooks/useTranslation'

import img8683 from '../assets/IMG_8683.JPG'
import img8669 from '../assets/IMG_8669.JPG'
import img8679 from '../assets/IMG_8679.JPG'
import img8671 from '../assets/IMG_8671.JPG'
import img8677 from '../assets/IMG_8677.JPG'
import img8670 from '../assets/IMG_8670.JPG'
import img8678 from '../assets/IMG_8678.JPG'
import img8673 from '../assets/IMG_8673.JPG'
import img8680 from '../assets/IMG_8680.JPG'
import img8672 from '../assets/IMG_8672.JPG'
import img8681 from '../assets/IMG_8681.JPG'
import img8675 from '../assets/IMG_8675.JPG'
import img8676 from '../assets/IMG_8676.JPG'
import img8682 from '../assets/IMG_8682.JPG'
import img8674 from '../assets/IMG_8674.JPG'

const IMAGES = [
  { src: img8683, alt: 'Bright living room with sofa, dining table and large windows' },
  { src: img8669, alt: 'Main bedroom with double bed and view of the courtyard' },
  { src: img8679, alt: 'Modern fully equipped kitchen with grey cabinets and oven' },
  { src: img8671, alt: 'Bathroom with bathtub and warm terracotta tiles' },
  { src: img8677, alt: 'Open-plan living and dining area with kitchen arch' },
  { src: img8670, alt: 'Main bedroom showing doors and air conditioning' },
  { src: img8678, alt: 'Dining table set for guests with kitchen in background' },
  { src: img8673, alt: 'Second bedroom with bunk beds and workspace desk' },
  { src: img8680, alt: 'Living room with dining table and TV unit' },
  { src: img8672, alt: 'Bathroom with sink, mirror and washing machine' },
  { src: img8681, alt: 'Living area with TV unit, smart TV and entrance door' },
  { src: img8675, alt: 'Bright entrance with wooden door and tiled staircase' },
  { src: img8676, alt: 'Small bathroom with classic diamond-pattern tiles' },
  { src: img8682, alt: 'TV unit and front door of the apartment' },
  { src: img8674, alt: 'Quiet workspace with desk and open window' },
]

export default function Gallery() {
  const { t } = useTranslation()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const thumbsRef = useRef(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback((e) => {
    e?.stopPropagation()
    setLightboxIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)
  }, [])
  const next = useCallback((e) => {
    e?.stopPropagation()
    setLightboxIndex(i => (i + 1) % IMAGES.length)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, prev, next])

  useEffect(() => {
    if (lightboxIndex === null || !thumbsRef.current) return
    const thumb = thumbsRef.current.children[lightboxIndex]
    if (thumb) thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [lightboxIndex])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const heroImages = IMAGES.slice(0, 5)

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
        <h2 className="gallery__heading">{t('gallery.heading')}</h2>

        <div className="gallery__hero" role="region" aria-label="Property photos">
          <div
            className="gallery__hero-main gallery__item"
            onClick={() => setLightboxIndex(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(0)}
            aria-label={`View photo: ${heroImages[0].alt}`}
          >
            <img src={heroImages[0].src} alt={heroImages[0].alt} />
          </div>

          <div className="gallery__hero-grid">
            {heroImages.slice(1).map((img, i) => (
              <div
                key={i}
                className="gallery__item"
                onClick={() => setLightboxIndex(i + 1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(i + 1)}
                aria-label={`View photo: ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>

          <button
            className="gallery__show-all"
            onClick={() => setLightboxIndex(0)}
            aria-label={`Show all ${IMAGES.length} photos`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
            </svg>
            Show all {IMAGES.length} photos
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="gallery__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <div className="gallery__lightbox-header" onClick={e => e.stopPropagation()}>
            <span className="gallery__lightbox-counter">{lightboxIndex + 1} / {IMAGES.length}</span>
            <button className="gallery__lightbox-close" onClick={closeLightbox} aria-label="Close photo viewer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="gallery__lightbox-stage" onClick={e => e.stopPropagation()}>
            <button className="gallery__lightbox-nav gallery__lightbox-prev" onClick={prev} aria-label="Previous photo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <img
              key={lightboxIndex}
              src={IMAGES[lightboxIndex].src}
              alt={IMAGES[lightboxIndex].alt}
              className="gallery__lightbox-img"
            />

            <button className="gallery__lightbox-nav gallery__lightbox-next" onClick={next} aria-label="Next photo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <p className="gallery__lightbox-caption" onClick={e => e.stopPropagation()}>
            {IMAGES[lightboxIndex].alt}
          </p>

          <div
            className="gallery__lightbox-thumbs"
            ref={thumbsRef}
            onClick={e => e.stopPropagation()}
          >
            {IMAGES.map((img, i) => (
              <button
                key={i}
                className={`gallery__lightbox-thumb${i === lightboxIndex ? ' gallery__lightbox-thumb--active' : ''}`}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Photo ${i + 1}: ${img.alt}`}
                aria-pressed={i === lightboxIndex}
              >
                <img src={img.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
