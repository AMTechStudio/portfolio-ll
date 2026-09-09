import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import { ProjectSection } from '@/pages/project-page/components/ProjectSection/ProjectSection'
import type { SocialData } from '../data/estudioTerra'
import styles from './SocialVideoSection.module.css'

type SocialVideoSectionProps = {
  data: SocialData
}

export function SocialVideoSection({ data }: SocialVideoSectionProps) {
  return (
    <ProjectSection>
      <SectionHeader number={data.number} title={data.title} description={data.description} />
      <video
        className={styles.networkVideo}
        src={data.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-label={data.videoLabel}
        controls
      />
    </ProjectSection>
  )
}
