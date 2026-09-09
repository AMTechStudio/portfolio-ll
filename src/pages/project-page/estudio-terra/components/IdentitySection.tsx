import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import { ProjectSection } from '@/pages/project-page/components/ProjectSection/ProjectSection'
import type { IdentityData, IdentityFontId, IdentitySwatchId } from '../data/estudioTerra'
import styles from './IdentitySection.module.css'

type IdentitySectionProps = {
  data: IdentityData
}

const fontCardClasses: Record<IdentityFontId, string> = {
  cutive: styles.fontCardCutive,
  corbel: styles.fontCardCorbel,
}

const swatchClasses: Record<IdentitySwatchId, string> = {
  light: styles.swatchLight,
  warmGray: styles.swatchWarmGray,
  mediumGreen: styles.swatchMediumGreen,
  darkGreen: styles.swatchDarkGreen,
  veryDark: styles.swatchVeryDark,
}

export function IdentitySection({ data }: IdentitySectionProps) {
  return (
    <ProjectSection>
      <SectionHeader
        number={data.number}
        title={data.title}
        description={
          <>
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </>
        }
      />
      <div className={styles.identityContent}>
        <div className={styles.typographyBlock}>
          <h3 className={styles.blockTitle}>{data.typographyTitle}</h3>
          {data.fonts.map((font) => (
            <div key={font.id} className={fontCardClasses[font.id]}>
              <span className={styles.fontPreview}>Aa</span>
              <span className={styles.fontLabel}>{font.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.colorsBlock}>
          <h3 className={styles.blockTitle}>{data.colorsTitle}</h3>
          {data.colors.map((color) => (
            <div key={color.hex} className={`${styles.colorSwatch} ${swatchClasses[color.swatch]}`}>
              <span
                className={`${styles.colorLabel} ${
                  color.labelTone === 'dark' ? styles.labelDark : styles.labelLight
                }`}
              >
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ProjectSection>
  )
}
