import { useRef, useEffect, RefObject } from 'react'

export function useParallax<T extends HTMLElement>(
  speed = 0.3,
  mobileOffset = 0,
  disableOnMobile = false,
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId: number

    const update = () => {
      rafId = requestAnimationFrame(() => {
        const isMobile = window.innerWidth < 768
        // На мобильном параллакс отключаем: смещение зависело бы от высоты
        // вьюпорта и «плавало» бы на разных телефонах.
        if (isMobile && disableOnMobile) {
          el.style.transform = ''
          return
        }
        const base = isMobile ? mobileOffset : 0
        const rect = el.getBoundingClientRect()
        const parallax = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed
        el.style.transform = `translateY(${base + parallax}px)`
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      cancelAnimationFrame(rafId)
    }
  }, [speed, mobileOffset, disableOnMobile])

  return ref
}
