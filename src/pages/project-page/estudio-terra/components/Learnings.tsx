import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import type { LearningsData } from '../data/estudioTerra'
import styles from './Learnings.module.css'

type LearningsProps = {
  data: LearningsData
}

export function Learnings({ data }: LearningsProps) {
  return (
    <>
      <SectionHeader number={data.number} title={data.title} description="" />
      <div className={styles.learningGrid}>
        {data.items.map((item, index) => (
          <div
            key={item.title}
            className={index === 0 ? styles.learningColumn : styles.learningColumnRight}
          >
            <h3 className={styles.learningTitle}>{item.title}</h3>
            <p className={styles.learningText}>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}
