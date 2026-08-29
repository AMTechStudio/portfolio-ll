import { useCallback, useEffect, useRef, useState } from 'react'
import { LeftArrowIcon, RightArrowIcon } from '@/components/Icons'
import { HeroProject } from '@/components/sections/HeroProject/HeroProject'
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader'

import styles from './EstudioTerra.module.css'

const articles = [
  {
    id: 'servicios',
    title: 'Servicios',
    description:
      'La página de Servicios emplea un diseño de bloques alternados para presentar tres áreas clave (Dirección de obra, Cálculo estructural, Visualización 3D). Utiliza descripciones concisas que se intercalan con fotografías contextuales demostrando la aplicación real de cada servicio.',
    imageSrc: '/images/projects/section-services-terra.webp',
    arrowCount: 1,
  },
  {
    id: 'proyectos',
    title: 'Proyectos',
    description:
      'Se dividieron los proyectos en residenciales y comerciales para guiar al usuario en su búsqueda. A solicitud del estudio, se detalló el concepto, los objetivos y el diseño de cada proyecto intercalando planos técnicos con fotografías para ofrecer una experiencia atractiva y completa.',
    arrowCount: 2,
  },
  {
    id: 'contacto',
    title: 'Contacto',
    description:
      'Con el contraste de color dividimos las opciones de contacto que tiene el usuario. El formulario integrado destaca sobre el fondo oscuro para fomentar el envío de mensajes desde la web, mientras que en la sección inferior el usuario encuentra formas de contacto tradicionales y la ubicación física del estudio.',
    imageSrc: '/images/projects/section-contact-terra.webp',
    arrowCount: 2,
  },
  {
    id: 'nosotros',
    title: 'Nosotros',
    description:
      'Para transmitir confianza y seriedad, la sección "Nosotros" presenta la trayectoria de los miembros del estudio acompañada de sus fotografías. El recorrido visual finaliza estratégicamente en un bloque inferior de alto contraste cromático que aloja el Call to Action (CTA), invitando al usuario a establecer contacto.',
    imageSrc: '/images/projects/section-us-terra.webp',
    arrowCount: 1,
  },
]

export function EstudioTerra() {
  const articlesRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const slider = articlesRef.current
    if (!slider) return

    const scrollLeft = slider.scrollLeft
    const maxScroll = slider.scrollWidth - slider.clientWidth

    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < maxScroll - 1)
  }, [])

  useEffect(() => {
    const slider = articlesRef.current
    if (!slider) return

    updateScrollState()
    slider.addEventListener('scroll', updateScrollState, { passive: true })

    return () => {
      slider.removeEventListener('scroll', updateScrollState)
    }
  }, [updateScrollState])

  const handleScrollLeft = useCallback(() => {
    const slider = articlesRef.current
    if (!slider) return

    slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' })
  }, [])

  const handleScrollRight = useCallback(() => {
    const slider = articlesRef.current
    if (!slider) return

    slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' })
  }, [])

  return (
    <>
      <HeroProject
        imageSrc="/images/projects/card-project-1.webp"
        title="Estudio Terra"
        description="Diseño de una interfaz web estructurada para dar protagonismo a los recursos visuales del estudio, destacando los renders y planimetrías de cada proyecto."
        rotatedLabel="Sobre el proyecto"
      />

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <SectionHeader
            number="01"
            title="Creación de identidad"
            description={
              <>
                <p>
                  La paleta de colores elegida de verdes desaturados y grises se
                  inspira en los materiales propios del rubro arquitectónico:
                  hormigón, madera y paisajismo.
                </p>
                <p>
                  Se utilizó Cutive Mono como tipografía principal ya que evoca
                  el lenguaje de los planos de AutoCAD, las cotas técnicas y la
                  precisión matemática de la disciplina.
                </p>
              </>
            }
          />
          <div className={styles.identityContent}>
            <div className={styles.typographyBlock}>
              <h3 className={styles.blockTitle}>Tipografía</h3>
              <div className={styles.fontCardCutive}>
                <span className={styles.fontPreview}>Aa</span>
                <span className={styles.fontLabel}>Cutive Mono</span>
              </div>
              <div className={styles.fontCardCorbel}>
                <span className={styles.fontPreview}>Aa</span>
                <span className={styles.fontLabel}>Corbel</span>
              </div>
            </div>
            <div className={styles.colorsBlock}>
              <h3 className={styles.blockTitle}>Colores</h3>
              <div className={`${styles.colorSwatch} ${styles.swatchLight}`}>
                <span className={`${styles.colorLabel} ${styles.labelDark}`}>
                  #F8FAF0
                </span>
              </div>
              <div className={`${styles.colorSwatch} ${styles.swatchWarmGray}`}>
                <span className={`${styles.colorLabel} ${styles.labelDark}`}>
                  #C7C6C2
                </span>
              </div>
              <div
                className={`${styles.colorSwatch} ${styles.swatchMediumGreen}`}
              >
                <span className={`${styles.colorLabel} ${styles.labelLight}`}>
                  #8D9287
                </span>
              </div>
              <div
                className={`${styles.colorSwatch} ${styles.swatchDarkGreen}`}
              >
                <span className={`${styles.colorLabel} ${styles.labelLight}`}>
                  #55624C
                </span>
              </div>
              <div className={`${styles.colorSwatch} ${styles.swatchVeryDark}`}>
                <span className={`${styles.colorLabel} ${styles.labelLight}`}>
                  #2F342B
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.articleSectionContent}>
          <div className={styles.articlesHeader}>
            <SectionHeader
              number="02"
              title="Propuesta de diseño"
              description="A través de sus cuatro secciones, la plataforma permite explorar los servicios que ofrece el estudio, descubrir sus proyectos, conocer al talento humano y facilitar el contacto."
            />
          </div>

          <div className={styles.controlButtonContainer}>
            <button
              type="button"
              className={styles.articleControlButton}
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              aria-label="Artículo anterior"
            >
              <LeftArrowIcon className={styles.articleControlIcon} />
            </button>
            <button
              type="button"
              className={styles.articleControlButton}
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              aria-label="Siguiente artículo"
            >
              <RightArrowIcon className={styles.articleControlIcon} />
            </button>
          </div>

          <div ref={articlesRef} className={styles.articlesContainer}>
            {articles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleBody}>
                  <div className={styles.articleTextBlock}>
                    <h3 className={styles.articleSubtitle}>{article.title}</h3>
                    <p className={styles.articleDescription}>
                      {article.description}
                    </p>
                  </div>
                  <div className={styles.articleImageBlock}>
                    {article.id === 'servicios' && (
                      <img
                        className={styles.articleImage}
                        src={article.imageSrc}
                        alt={`${article.title} — Estudio Terra`}
                      />
                    )}
                    {article.id === 'proyectos' && (
                      <video
                        className={styles.articleImage}
                        src="/videos/video-proyects-terra.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label="Video de proyectos — Estudio Terra"
                      />
                    )}
                    {article.imageSrc &&
                      article.id !== 'servicios' &&
                      article.id !== 'proyectos' && (
                        <img
                          className={styles.articleImage}
                          src={article.imageSrc}
                          alt={`${article.title} — Estudio Terra`}
                        />
                      )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.responsiveLayout}>
            <SectionHeader
              number="03"
              title="Diseño responsive"
              description="El proyecto cuenta con diseño responsive, asegurando que la interfaz se adapte a cualquier pantalla. Esto garantiza una experiencia fluida y accesible al usuario tanto en dispositivos móviles como en computadoras."
            />
            <video
              className={styles.iphoneVideo}
              src="/videos/responsive-design-terra.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Mockup responsive — Estudio Terra"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <SectionHeader
            number="04"
            title="Presencia en redes"
            description="Para potenciar el Brand Awareness en redes sociales, diseñé una pieza de Motion Design en After Effects. El objetivo es que este primer punto de contacto mantenga una coherencia visual con la plataforma web."
          />
          <video
            className={styles.networkVideo}
            src="/videos/promoting-video-terra.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Video promocional — Estudio Terra"
            controls
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <SectionHeader number="05" title="Aprendizaje" description="" />
          <div className={styles.learningGrid}>
            <div className={styles.learningColumn}>
              <h3 className={styles.learningTitle}>
                Calidad fotográfica y su impacto visual
              </h3>
              <p className={styles.learningText}>
                Este proyecto me enseñó que, especialmente en rubros
                hipervisuales como la arquitectura, el impacto estético final
                del producto digital está intimamente ligado a la calidad del
                material fotográfico y los renders provistos por el cliente ya
                que las imágenes afectan no solo el diseño, sino la percepción
                de valor y confianza que su marca transmite al usuario final.
              </p>
            </div>
            <div className={styles.learningColumnRight}>
              <h3 className={styles.learningTitle}>
                La experiencia completa de marca
              </h3>
              <p className={styles.learningText}>
                Aprendí que el diseño va más allá de la interfaz. Todo con lo
                que el usuario interactúa, ya sea un video o la propia web, debe
                mantener la misma identidad visual para transmitir solidez y
                confianza.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
