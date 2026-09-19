import type { ReactNode } from 'react'
import { Children } from 'react'
import { useCarousel } from '@/hooks/useCarousel'
import { LeftArrowIcon, RightArrowIcon } from '@/components/Icons'
import { CarouselDots } from './CarouselDots'

import styles from './Carousel.module.css'

type CarouselProps = {
  className?: string
  children: ReactNode
}

export function Carousel({ className, children }: CarouselProps) {
  const count = Children.count(children)
  const {
    sliderRef,
    canScrollLeft,
    canScrollRight,
    activeIndex,
    scrollLeft,
    scrollRight,
    scrollToIndex,
  } = useCarousel(count)
  const containerClassName = [styles.carouselContainer, className].filter(Boolean).join(' ')

  return (
    <div className={containerClassName}>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrowButton}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <LeftArrowIcon size={32} className={styles.arrowIcon} />
        </button>
        <button
          type="button"
          className={styles.arrowButton}
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <RightArrowIcon size={32} className={styles.arrowIcon} />
        </button>
      </div>

      <div ref={sliderRef} className={styles.sliders}>
        {children}
      </div>

      <CarouselDots count={count} activeIndex={activeIndex} onSelect={scrollToIndex} />
    </div>
  )
}
