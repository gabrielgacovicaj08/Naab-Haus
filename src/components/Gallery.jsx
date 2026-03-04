import { useState, useEffect, useRef } from 'react'
import './Gallery.css'
import { useTranslation } from '../hooks/useTranslation'

const IMAGES = [
  {
    src: 'https://images.pexels.com/photos/364391/pexels-photo-364391.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sardinia beach with clear sea',
  },
  {
    src: 'https://images.pexels.com/photos/13319488/pexels-photo-13319488.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Calm sea at dawn in Alghero, Sardinia',
  },
  {
    src: 'https://images.pexels.com/photos/32954604/pexels-photo-32954604.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sardinia coastline with turquoise water',
  },
  {
    src: 'https://images.pexels.com/photos/2105937/pexels-photo-2105937.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Crystal clear sea in Sardinia',
  },
  {
    src: 'https://images.pexels.com/photos/12656696/pexels-photo-12656696.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Rocky sea cave on Sardinian coast',
  },
  {
    src: 'https://images.pexels.com/photos/20097582/pexels-photo-20097582.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Aerial drone view of turquoise coastal water',
  },
  {
    src: 'https://images.pexels.com/photos/31817155/pexels-photo-31817155.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Luxury seaside villa with ocean view',
  },
  {
    src: 'https://images.pexels.com/photos/16327792/pexels-photo-16327792.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Turquoise sea and sandy beach',
  },
  {
    src: 'https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Panoramic view of the Mediterranean sea',
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
