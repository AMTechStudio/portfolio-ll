import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline src="/videos/herofinal.mp4" />

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>Hola!</p>
          <p className={styles.name}>Soy Luciana</p>
          <p className={styles.title}>DISEÑADORA UX/UI</p>
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
