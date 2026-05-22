import { useEffect, useRef } from 'react'

export function useStaggeredReveal(visibleClass, { stagger = 0, threshold = 0.15 } = {}) {
  const refs = useRef([])
  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (stagger) el.style.transitionDelay = `${i * stagger}s`
            el.classList.add(visibleClass)
            observer.disconnect()
          }
        },
        { threshold }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((obs) => obs && obs.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return refs
}

export function useFadeInOnScroll(visibleClass, threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(visibleClass)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return ref
}
