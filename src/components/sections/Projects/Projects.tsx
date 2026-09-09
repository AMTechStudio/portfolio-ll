import { LeftArrowIcon, RightArrowIcon } from '@/components/Icons'
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard'
import { projects } from '@/data/projects'
import { useCarousel } from '@/hooks/useCarousel'
import styles from './Projects.module.css'

export function Projects() {
  const { sliderRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight } =
    useCarousel({ scrollAmount: 1080 })

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
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <LeftArrowIcon className={styles.arrowIcon} />
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={scrollRight}
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
