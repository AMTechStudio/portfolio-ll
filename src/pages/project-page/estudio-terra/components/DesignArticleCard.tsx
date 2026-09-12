import type { Article } from '../data/estudioTerra'
import styles from './DesignArticleCard.module.css'

type DesignArticlesSectionProps = {
  article: Article
}

export function DesignArticleCard({ article }: DesignArticlesSectionProps) {
  return (
    <article key={article.id} className={styles.articleCard}>
      <div className={styles.articleBody}>
        <div className={styles.articleTextBlock}>
          <h3 className={styles.articleSubtitle}>{article.title}</h3>
          <p className={styles.articleDescription}>{article.description}</p>
        </div>
        <div className={styles.articleImageBlock}>
          {article.media.kind === 'image' && (
            <img className={styles.articleImage} src={article.media.src} alt={article.media.alt} />
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
  )
}
