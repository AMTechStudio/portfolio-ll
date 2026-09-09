import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import { ProjectSection } from '@/pages/project-page/components/ProjectSection/ProjectSection'
import type { ResponsiveData } from '../data/estudioTerra'
import styles from './ResponsiveShowcaseSection.module.css'

type ResponsiveShowcaseSectionProps = {
  data: ResponsiveData
}

export function ResponsiveShowcaseSection({ data }: ResponsiveShowcaseSectionProps) {
  return (
    <ProjectSection>
      <div className={styles.responsiveLayout}>
        <SectionHeader number={data.number} title={data.title} description={data.description} />
        <video
          className={styles.iphoneVideo}
          src={data.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-label={data.videoLabel}
        />
      </div>
    </ProjectSection>
  )
}
