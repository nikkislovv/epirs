import { useRef, useEffect, RefObject } from 'react'

export function useParallax<T extends HTMLElement>(speed = 0.3): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId: number

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed
        el.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [speed])

  return ref
}
