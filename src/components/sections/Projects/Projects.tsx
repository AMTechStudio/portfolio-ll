import { useCallback, useEffect, useRef, useState } from 'react'
import { LeftArrowIcon, RightArrowIcon } from '@/components/Icons'
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard'
import { projects } from '@/data/projects'

import styles from './Projects.module.css'

const SCROLL_AMOUNT = 1080

export function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return

    const scrollLeft = slider.scrollLeft
    const maxScroll = slider.scrollWidth - slider.clientWidth

    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < maxScroll - 1)
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

  const handleScrollLeft = useCallback(() => {
    sliderRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  }, [])

  const handleScrollRight = useCallback(() => {
    sliderRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })
  }, [])

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Proyectos</h2>
        </div>

        <div className={styles.controlsRow}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <LeftArrowIcon className={styles.arrowIcon} />
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <RightArrowIcon className={styles.arrowIcon} />
          </button>
        </div>

        <div
          ref={sliderRef}
          className={`${styles.projectsSlider} ${styles.hideScrollbar}`}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
