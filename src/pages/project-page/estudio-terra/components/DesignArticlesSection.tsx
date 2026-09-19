import { Carousel } from '@/components/ui/Carousel/Carousel'
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import { ProjectSection } from '@/pages/project-page/components/ProjectSection/ProjectSection'
import type { Article, SectionHeaderData } from '../data/estudioTerra'
import { DesignArticleCard } from './DesignArticleCard'

import styles from './DesignArticlesSection.module.css'

type DesignArticlesSectionProps = {
  header: SectionHeaderData
  articles: Article[]
}

export function DesignArticlesSection({ header, articles }: DesignArticlesSectionProps) {
  return (
    <ProjectSection>
      <SectionHeader number={header.number} title={header.title} description={header.description} />
      <Carousel className={styles.carouselViewport}>
        {articles.map((article) => (
          <DesignArticleCard article={article} key={article.id} />
        ))}
      </Carousel>
    </ProjectSection>
  )
}
