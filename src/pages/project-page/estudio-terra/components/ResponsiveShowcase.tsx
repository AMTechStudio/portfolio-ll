import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import type { ResponsiveData } from '../data/estudioTerra'
import styles from './ResponsiveShowcase.module.css'

type ResponsiveShowcaseProps = {
  data: ResponsiveData
}

export function ResponsiveShowcase({ data }: ResponsiveShowcaseProps) {
  return (
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
  )
}
