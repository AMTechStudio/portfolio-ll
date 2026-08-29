import styles from './Hero.module.css'

interface HeroProps {
  proyectName: string
  descriptionProyect: string
}

export function Hero({ proyectName, descriptionProyect }: HeroProps) {
  return (
    <section className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline src="/videos/herofinal.mp4" />

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>{proyectName}</p>
          <p className={styles.name}>{descriptionProyect}</p>
        </div>

        <div className={styles.buttons}>
          <button type="button" className={styles.primaryButton}>
            Contacto
          </button>
          <button type="button" className={styles.secondaryButton}>
            Ver proyectos
          </button>
        </div>
      </div>
    </section>
  )
}
