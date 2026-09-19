import styles from './CarouselDots.module.css'

type CarouselDotsProps = {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
  label?: string
}

export function CarouselDots({
  count,
  activeIndex,
  onSelect,
  label = 'Carousel navigation',
}: CarouselDotsProps) {
  if (count <= 1) return null

  const dots = Array.from({ length: count }, (_, i) => i)

  return (
    <div className={styles.dots} role="tablist" aria-label={label}>
      {dots.map((i) => (
        <button
          key={i}
          type="button"
          className={[styles.dot, i === activeIndex && styles.dotActive].filter(Boolean).join(' ')}
          aria-label={`Go to item ${i + 1} of ${count}`}
          aria-current={i === activeIndex}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  )
}
