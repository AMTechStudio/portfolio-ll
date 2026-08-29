import { Link, NavLink } from 'react-router-dom'
import { SpanishFlagIcon, ChevronDownIcon } from '@/components/Icons'

import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        LUCIANA LARRAMENDY
      </Link>

      <div className={styles.navContent}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              About me
            </a>
          </li>
          <li>
            <Link to="/#proyectos" className={styles.navLink}>
              Proyectos
            </Link>
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
