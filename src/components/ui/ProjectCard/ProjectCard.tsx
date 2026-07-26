import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function ProjectCard({ title, description, imageSrc, imageAlt }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={imageSrc} alt={imageAlt} />
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        <div className={styles.cta}>
          <span className={styles.ctaLine} />
          <span className={styles.ctaText}>Ver más</span>
        </div>
      </div>
    </article>
  )
}
