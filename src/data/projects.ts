export type ProjectData = {
  id: number
  slug: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: 'estudio-terra',
    title: 'Estudio Terra',
    description: 'Página web para estudio de arquitectura y diseño.',
    imageSrc: '/images/projects/card-project-1.webp',
    imageAlt: 'Estudio Terra - Proyecto de arquitectura',
  },
  {
    id: 2,
    slug: 'equo',
    title: 'Equo',
    description: 'Aplicación móvil de distribución de tareas del hogar.',
    imageSrc: '/images/projects/card-project-equo.webp',
    imageAlt: 'Equo - Aplicación de tareas del hogar',
  },
  {
    id: 3,
    slug: 'cora',
    title: 'Cora',
    description: 'Aplicación móvil de esparcimiento para adultos mayores.',
    imageSrc: '/images/projects/card-project-cora.webp',
    imageAlt: 'Cora - Aplicación para adultos mayores',
  },
  {
    id: 4,
    slug: 'saas',
    title: 'SaaS',
    description: 'Plataforma Legaltech para notarios.',
    imageSrc: '/images/projects/card-project-saas.webp',
    imageAlt: 'SaaS - Plataforma Legaltech',
  },
]
