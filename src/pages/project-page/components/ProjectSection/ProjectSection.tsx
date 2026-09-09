import type { ReactNode } from 'react'
import styles from './ProjectSection.module.css'

type ProjectSectionProps = {
  id?: string
  className?: string
  contentClassName?: string
  children: ReactNode
}

export function ProjectSection({ id, className, contentClassName, children }: ProjectSectionProps) {
  const sectionClassName = [styles.section, className].filter(Boolean).join(' ')
  const contentClassNameValue = [styles.content, contentClassName].filter(Boolean).join(' ')

  return (
    <section id={id} className={sectionClassName}>
      <div className={contentClassNameValue}>{children}</div>
    </section>
  )
}
