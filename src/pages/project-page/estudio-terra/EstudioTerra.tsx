import { HeroProject } from '@/pages/project-page/components/HeroProject/HeroProject'
import {
  articles,
  designHeader,
  hero,
  identity,
  learnings,
  responsive,
  social,
} from './data/estudioTerra'
import { DesignArticlesSection } from './components/DesignArticlesSection'
import { IdentitySection } from './components/IdentitySection'
import { LearningsSection } from './components/LearningsSection'
import { ResponsiveShowcaseSection } from './components/ResponsiveShowcaseSection'
import { SocialVideoSection } from './components/SocialVideoSection'

export function EstudioTerra() {
  return (
    <>
      <HeroProject
        imageSrc={hero.imageSrc}
        title={hero.title}
        description={hero.description}
        rotatedLabel={hero.rotatedLabel}
      />

      <IdentitySection data={identity} />

      <DesignArticlesSection header={designHeader} articles={articles} />

      <ResponsiveShowcaseSection data={responsive} />

      <SocialVideoSection data={social} />

      <LearningsSection data={learnings} />
    </>
  )
}
