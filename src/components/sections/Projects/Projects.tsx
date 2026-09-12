import { LeftArrowIcon, RightArrowIcon } from '@/components/Icons'
import { Carousel } from '@/components/ui/Carousel/Carousel'
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard'
import { projects } from '@/data/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Proyectos</h2>
        </div>

        <Carousel
          prevIcon={<LeftArrowIcon className={styles.arrowIcon} />}
          nextIcon={<RightArrowIcon className={styles.arrowIcon} />}
          viewportClassName={`${styles.projectsSlider} ${styles.hideScrollbar}`}
          controlsClassName={styles.controlsRow}
          buttonClassName={styles.arrowButton}
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
        </Carousel>
      </div>
    </section>
  )
}
