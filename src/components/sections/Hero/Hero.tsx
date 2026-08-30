import { Button } from '@/components/ui/Button/Button'
import { Link } from '@/components/ui/Link/Link'

import styles from './Hero.module.css'

interface HeroProps {
  proyectName: string
  descriptionProyect: string
}

export function Hero({ proyectName, descriptionProyect }: HeroProps) {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        src="/videos/herofinal.mp4"
      />

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>{proyectName}</p>
          <p className={styles.name}>{descriptionProyect}</p>
        </div>

        <div className={styles.buttonsContainer}>
          <Button variant="primary">Contacto</Button>
          <Link variant="secondary" href="#projects">
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
