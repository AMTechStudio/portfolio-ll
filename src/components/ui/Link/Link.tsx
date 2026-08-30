import type { AnchorHTMLAttributes } from 'react'
import styles from '../Button/Button.module.css'

type LinkVariant = 'primary' | 'secondary'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: LinkVariant
}

export function Link({
  variant = 'primary',
  className,
  children,
  ...props
}: LinkProps) {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary
  const combinedClassName = [styles.btn, variantClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={combinedClassName} {...props}>
      <span className={styles.content}>{children}</span>
    </a>
  )
}
