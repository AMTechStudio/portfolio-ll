import styles from './Footer.module.css'
import { LinkedInIcon, CloseEnvelopeIcon } from '@/components/Icons'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <div className={styles.menu}>
          <div className={styles.socialSection}>
            <span className={styles.socialLabel}>Social</span>
            <div className={styles.socialIcons}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={24} />
              </a>
              <a href="mailto:contact@example.com" className={styles.socialLink} aria-label="Email">
                <CloseEnvelopeIcon size={24} />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <ul className={styles.linkColumn}>
              <li>
                <a href="/" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="/proyectos" className={styles.link}>
                  Proyectos
                </a>
              </li>
            </ul>
            <ul className={styles.linkColumn}>
              <li>
                <a href="/about" className={styles.link}>
                  About
                </a>
              </li>
              <li>
                <a href="/contacto" className={styles.link}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={styles.credits}>
        <span className={styles.creditsText}>Design by Luciana Larramendy</span>
        <span className={styles.creditsText}>Coding by Agustín Moya</span>
      </div>
    </footer>
  )
}
