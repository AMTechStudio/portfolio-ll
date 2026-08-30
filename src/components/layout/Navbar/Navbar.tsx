import { Link, NavLink, useLocation } from 'react-router-dom'
import { SpanishFlagIcon, ChevronDownIcon } from '@/components/Icons'
import { Button } from '@/components/ui/Button/Button'

import styles from './Navbar.module.css'

export function Navbar() {
  const location = useLocation()
  const isHomeActive = location.pathname === '/' && location.hash === ''
  const isProjectsActive =
    location.pathname === '/' && location.hash === '#projects'

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
              className={isHomeActive ? styles.navLinkActive : styles.navLink}
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
            <NavLink
              to="/#projects"
              className={
                isProjectsActive ? styles.navLinkActive : styles.navLink
              }
            >
              Proyectos
            </NavLink>
          </li>
        </ul>

        <button type="button" className={styles.languageSelector}>
          <SpanishFlagIcon size={24} className={styles.flagIcon} />
          <span>Español</span>
          <ChevronDownIcon size={16} className={styles.chevronIcon} />
        </button>

        <Button variant="primary">Contacto</Button>
      </div>
    </nav>
  )
}
