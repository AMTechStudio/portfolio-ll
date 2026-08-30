import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary
  const combinedClassName = [styles.btn, variantClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={combinedClassName} {...props}>
      <span className={styles.content}>{children}</span>
    </button>
  )
}
