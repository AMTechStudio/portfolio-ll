import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import type { SocialData } from '../data/estudioTerra'
import styles from './SocialVideo.module.css'

type SocialVideoProps = {
  data: SocialData
}

export function SocialVideo({ data }: SocialVideoProps) {
  return (
    <>
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
    </>
  )
}
