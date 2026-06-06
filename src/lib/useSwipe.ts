import { useRef } from 'react'

interface UseSwipeOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }: UseSwipeOptions) {
  const startX = useRef<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return
    const delta = startX.current - e.changedTouches[0].clientX
    if (delta > threshold) onSwipeLeft?.()
    else if (delta < -threshold) onSwipeRight?.()
    startX.current = null
  }

  return { onTouchStart, onTouchEnd }
}
