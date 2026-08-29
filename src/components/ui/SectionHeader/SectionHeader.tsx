import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  number: string
  title: string
  description: string | React.ReactNode
}

export function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.headerRow}>
        <span className={styles.number}>{number}</span>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  )
}
