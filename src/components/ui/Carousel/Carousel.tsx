import type { ReactNode } from 'react'
import { useCarousel } from '@/hooks/useCarousel'
import styles from './Carousel.module.css'

type CarouselProps = {
  scrollAmount?: number | 'viewport'
  prevLabel?: string
  nextLabel?: string
  prevIcon: ReactNode
  nextIcon: ReactNode
  viewportClassName?: string
  controlsClassName?: string
  buttonClassName?: string
  children: ReactNode
}

export function Carousel({
  scrollAmount = 'viewport',
  prevLabel = 'Scroll left',
  nextLabel = 'Scroll right',
  prevIcon,
  nextIcon,
  viewportClassName,
  controlsClassName,
  buttonClassName,
  children,
}: CarouselProps) {
  const { sliderRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight } = useCarousel({
    scrollAmount,
  })

  const controlsClass = [styles.controls, controlsClassName].filter(Boolean).join(' ')

  return (
    <div className={styles.carouselContainer}>
      <div className={controlsClass}>
        <button
          type="button"
          className={buttonClassName}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label={prevLabel}
        >
          {prevIcon}
        </button>
        <button
          type="button"
          className={buttonClassName}
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label={nextLabel}
        >
          {nextIcon}
        </button>
      </div>
      <div ref={sliderRef} className={viewportClassName}>
        {children}
      </div>
    </div>
  )
}
