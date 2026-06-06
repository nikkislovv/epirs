import { useRef, useEffect, RefObject } from 'react'

export function useParallax<T extends HTMLElement>(speed = 0.3, mobileOffset = 0): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId: number

    const update = () => {
      rafId = requestAnimationFrame(() => {
        const isMobile = window.innerWidth < 768
        const base = isMobile ? mobileOffset : 0
        const rect = el.getBoundingClientRect()
        const parallax = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed
        el.style.transform = `translateY(${base + parallax}px)`
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      cancelAnimationFrame(rafId)
    }
  }, [speed, mobileOffset])

  return ref
}
