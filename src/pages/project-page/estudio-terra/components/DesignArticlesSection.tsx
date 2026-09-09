import { LeftArrowIcon, RightArrowIcon } from '@/components/Icons'
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'
import { useCarousel } from '@/hooks/useCarousel'
import { ProjectSection } from '@/pages/project-page/components/ProjectSection/ProjectSection'
import type { Article, SectionHeaderData } from '../data/estudioTerra'
import styles from './DesignArticlesSection.module.css'

type DesignArticlesSectionProps = {
  header: SectionHeaderData
  articles: Article[]
}

export function DesignArticlesSection({ header, articles }: DesignArticlesSectionProps) {
  const { sliderRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight } = useCarousel({
    scrollAmount: 'viewport',
  })

  return (
    <ProjectSection>
      <SectionHeader number={header.number} title={header.title} description={header.description} />
      <div className={styles.controlButtonContainer}>
        <button
          type="button"
          className={styles.articleControlButton}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Artículo anterior"
        >
          <LeftArrowIcon className={styles.articleControlIcon} />
        </button>
        <button
          type="button"
          className={styles.articleControlButton}
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Siguiente artículo"
        >
          <RightArrowIcon className={styles.articleControlIcon} />
        </button>
      </div>
      <div ref={sliderRef} className={styles.articlesContainer}>
        {articles.map((article) => (
          <article key={article.id} className={styles.articleCard}>
            <div className={styles.articleBody}>
              <div className={styles.articleTextBlock}>
                <h3 className={styles.articleSubtitle}>{article.title}</h3>
                <p className={styles.articleDescription}>{article.description}</p>
              </div>
              <div className={styles.articleImageBlock}>
                {article.media.kind === 'image' && (
                  <img
                    className={styles.articleImage}
                    src={article.media.src}
                    alt={article.media.alt}
                  />
                )}
                {article.media.kind === 'video' && (
                  <video
                    className={styles.articleImage}
                    src={article.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={article.media.label}
                  />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </ProjectSection>
  )
}
