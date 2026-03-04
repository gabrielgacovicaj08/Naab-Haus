import { useState, useEffect, useRef } from 'react'
import './Gallery.css'
import { useTranslation } from '../hooks/useTranslation'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Sardinian beach with crystal clear turquoise water',
  },
  {
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    alt: 'Private villa pool overlooking the sea',
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    alt: 'Mediterranean coastal landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    alt: 'Bright and airy villa bedroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    alt: 'Serene beach with turquoise waters',
  },
  {
    src: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80',
    alt: 'Golden sunset over the Sardinian sea',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Luxury Mediterranean villa exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    alt: 'Fully equipped modern kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    alt: 'Aerial view of pristine Sardinian beach',
  },
]

export default function Gallery() {
  const { t } = useTranslation()
  const [lightboxImage, setLightboxImage] = useState(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('gallery__grid--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!lightboxImage) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxImage(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightboxImage])

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
        <h2 className="gallery__heading">{t('gallery.heading')}</h2>
        <div className="gallery__grid" ref={gridRef}>
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="gallery__item"
              onClick={() => setLightboxImage(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightboxImage(img)}
              aria-label={`View ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="gallery__lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="gallery__lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
