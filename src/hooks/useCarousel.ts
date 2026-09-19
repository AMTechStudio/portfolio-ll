import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

type UseCarouselResult = {
  sliderRef: RefObject<HTMLDivElement | null>
  canScrollLeft: boolean
  canScrollRight: boolean
  activeIndex: number
  scrollLeft: () => void
  scrollRight: () => void
  scrollToIndex: (index: number) => void
}

export function useCarousel(count: number): UseCarouselResult {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const clampIndex = useCallback(
    (index: number) => {
      if (count <= 0) return 0
      return Math.min(Math.max(index, 0), count - 1)
    },
    [count],
  )

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return

    const maxScroll = slider.scrollWidth - slider.clientWidth

    setCanScrollLeft(slider.scrollLeft > 0)
    setCanScrollRight(slider.scrollLeft < maxScroll - 1)

    const clientWidth = slider.clientWidth
    if (clientWidth <= 0) {
      setActiveIndex(0)
      return
    }

    const rawIndex = Math.round(slider.scrollLeft / clientWidth)
    setActiveIndex(clampIndex(rawIndex))
  }, [clampIndex])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    updateScrollState()
    slider.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      slider.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const getDelta = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return 0
    return slider.clientWidth
  }, [])

  const scrollLeft = useCallback(() => {
    sliderRef.current?.scrollBy({ left: -getDelta(), behavior: 'smooth' })
  }, [getDelta])

  const scrollRight = useCallback(() => {
    sliderRef.current?.scrollBy({ left: getDelta(), behavior: 'smooth' })
  }, [getDelta])

  const scrollToIndex = useCallback(
    (index: number) => {
      const slider = sliderRef.current
      if (!slider) return
      const target = clampIndex(index)
      slider.scrollTo({ left: target * slider.clientWidth, behavior: 'smooth' })
    },
    [clampIndex],
  )

  return {
    sliderRef,
    canScrollLeft,
    canScrollRight,
    activeIndex,
    scrollLeft,
    scrollRight,
    scrollToIndex,
  }
}
