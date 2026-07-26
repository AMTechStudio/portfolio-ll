import { useCallback, useEffect, useRef, useState } from 'react'
import { RightArrowIcon } from '@/components/Icons'
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard'

import styles from './Projects.module.css'

type ProjectData = {
  id: number
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Estudio Terra',
    description: 'Página web para estudio de arquitectura y diseño.',
    imageSrc: '/images/projects/card-project-1.webp',
    imageAlt: 'Estudio Terra - Proyecto de arquitectura',
  },
  {
    id: 2,
    title: 'Equo',
    description: 'Aplicación móvil de distribución de tareas del hogar.',
    imageSrc: '/images/projects/card-project-equo.webp',
    imageAlt: 'Equo - Aplicación de tareas del hogar',
  },
  {
    id: 3,
    title: 'Cora',
    description: 'Aplicación móvil de esparcimiento para adultos mayores.',
    imageSrc: '/images/projects/card-project-cora.webp',
    imageAlt: 'Cora - Aplicación para adultos mayores',
  },
  {
    id: 4,
    title: 'SaaS',
    description: 'Plataforma Legaltech para notarios.',
    imageSrc: '/images/projects/card-project-saas.webp',
    imageAlt: 'SaaS - Plataforma Legaltech',
  },
]

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
    <section className={styles.section}>
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
            <RightArrowIcon className={styles.arrowIcon} style={{ transform: 'scaleX(-1)' }} />
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

        <div ref={sliderRef} className={`${styles.projectsSlider} ${styles.hideScrollbar}`}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
