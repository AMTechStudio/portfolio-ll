import { HeroProject } from '@/pages/project-page/components/HeroProject/HeroProject'
import { ProjectSection } from '@/pages/project-page/components/ProjectSection/ProjectSection'
import {
  articles,
  designHeader,
  hero,
  identity,
  learnings,
  responsive,
  social,
} from './data/estudioTerra'
import { DesignArticles } from './components/DesignArticles'
import { IdentitySection } from './components/IdentitySection'
import { Learnings } from './components/Learnings'
import { ResponsiveShowcase } from './components/ResponsiveShowcase'
import { SocialVideo } from './components/SocialVideo'

export function EstudioTerra() {
  return (
    <>
      <HeroProject
        imageSrc={hero.imageSrc}
        title={hero.title}
        description={hero.description}
        rotatedLabel={hero.rotatedLabel}
      />

      <ProjectSection>
        <IdentitySection data={identity} />
      </ProjectSection>

      <ProjectSection>
        <DesignArticles header={designHeader} articles={articles} />
      </ProjectSection>

      <ProjectSection>
        <ResponsiveShowcase data={responsive} />
      </ProjectSection>

      <ProjectSection>
        <SocialVideo data={social} />
      </ProjectSection>

      <ProjectSection>
        <Learnings data={learnings} />
      </ProjectSection>
    </>
  )
}
