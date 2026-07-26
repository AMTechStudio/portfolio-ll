import styles from './Navbar.module.css'
import { SpanishFlagIcon, ChevronDownIcon } from '@/components/Icons'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.brand}>LUCIANA LARRAMENDY</span>

      <div className={styles.navContent}>
        <ul className={styles.navLinks}>
          <li>
            <a href="#" className={styles.navLinkActive}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              About me
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Proyectos
            </a>
          </li>
        </ul>

        <button type="button" className={styles.languageSelector}>
          <SpanishFlagIcon size={24} className={styles.flagIcon} />
          <span>Español</span>
          <ChevronDownIcon size={16} />
        </button>

        <button type="button" className={styles.ctaButton}>
          Contacto
        </button>
      </div>
    </nav>
  )
}
