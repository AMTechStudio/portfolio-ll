import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

type UseCarouselOptions = {
  scrollAmount?: number | 'viewport'
}

type UseCarouselResult = {
  sliderRef: RefObject<HTMLDivElement | null>
  canScrollLeft: boolean
  canScrollRight: boolean
  scrollLeft: () => void
  scrollRight: () => void
}

export function useCarousel(options?: UseCarouselOptions): UseCarouselResult {
  const scrollAmount = options?.scrollAmount ?? 'viewport'
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return

    const maxScroll = slider.scrollWidth - slider.clientWidth

    setCanScrollLeft(slider.scrollLeft > 0)
    setCanScrollRight(slider.scrollLeft < maxScroll - 1)
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    updateScrollState()
    slider.addEventListener('scroll', updateScrollState, { passive: true })

    return () => {
      slider.removeEventListener('scroll', updateScrollState)
    }
  }, [updateScrollState])

  const getDelta = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return 0
    if (scrollAmount === 'viewport') return slider.clientWidth
    return scrollAmount
  }, [scrollAmount])

  const scrollLeft = useCallback(() => {
    sliderRef.current?.scrollBy({ left: -getDelta(), behavior: 'smooth' })
  }, [getDelta])

  const scrollRight = useCallback(() => {
    sliderRef.current?.scrollBy({ left: getDelta(), behavior: 'smooth' })
  }, [getDelta])

  return { sliderRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight }
}
