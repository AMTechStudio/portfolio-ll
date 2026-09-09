import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import { ProjectSection } from '@/pages/project-page/components/ProjectSection/ProjectSection'
import type { LearningsData } from '../data/estudioTerra'
import styles from './LearningsSection.module.css'

type LearningsSectionProps = {
  data: LearningsData
}

export function LearningsSection({ data }: LearningsSectionProps) {
  return (
    <ProjectSection>
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
    </ProjectSection>
  )
}
