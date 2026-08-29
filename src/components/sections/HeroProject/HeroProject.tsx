import styles from './HeroProject.module.css'

interface HeroProjectProps {
  imageSrc: string
  title: string
  description: string
  rotatedLabel: string
}

export const HeroProject = ({ imageSrc, title, description, rotatedLabel }: HeroProjectProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={title} className={styles.image} />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.verticalTextContainer}>
          <p className={styles.verticalText}>{rotatedLabel}</p>
        </div>
      </div>
    </section>
  )
}
