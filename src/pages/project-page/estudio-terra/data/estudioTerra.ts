export type ArticleMedia =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; label: string }
  | { kind: 'none' }

export type Article = {
  id: string
  title: string
  description: string
  media: ArticleMedia
}

export type HeroData = {
  imageSrc: string
  title: string
  description: string
  rotatedLabel: string
}

export type IdentityFontId = 'cutive' | 'corbel'

export type IdentityFont = {
  id: IdentityFontId
  name: string
}

export type IdentitySwatchId =
  'light' | 'warmGray' | 'mediumGreen' | 'darkGreen' | 'veryDark'

export type IdentityColor = {
  hex: string
  swatch: IdentitySwatchId
  labelTone: 'dark' | 'light'
}

export type IdentityData = {
  number: string
  title: string
  paragraphs: string[]
  typographyTitle: string
  fonts: IdentityFont[]
  colorsTitle: string
  colors: IdentityColor[]
}

export type SectionHeaderData = {
  number: string
  title: string
  description: string
}

export type ResponsiveData = {
  number: string
  title: string
  description: string
  videoSrc: string
  videoLabel: string
}

export type SocialData = {
  number: string
  title: string
  description: string
  videoSrc: string
  videoLabel: string
}

export type LearningItem = {
  title: string
  text: string
}

export type LearningsData = {
  number: string
  title: string
  items: LearningItem[]
}

export const hero: HeroData = {
  imageSrc: '/images/projects/card-project-1.webp',
  title: 'Estudio Terra',
  description:
    'Diseño de una interfaz web estructurada para dar protagonismo a los recursos visuales del estudio, destacando los renders y planimetrías de cada proyecto.',
  rotatedLabel: 'Sobre el proyecto',
}

export const identity: IdentityData = {
  number: '01',
  title: 'Creación de identidad',
  paragraphs: [
    'La paleta de colores elegida de verdes desaturados y grises se inspira en los materiales propios del rubro arquitectónico: hormigón, madera y paisajismo.',
    'Se utilizó Cutive Mono como tipografía principal ya que evoca el lenguaje de los planos de AutoCAD, las cotas técnicas y la precisión matemática de la disciplina.',
  ],
  typographyTitle: 'Tipografía',
  fonts: [
    { id: 'cutive', name: 'Cutive Mono' },
    { id: 'corbel', name: 'Corbel' },
  ],
  colorsTitle: 'Colores',
  colors: [
    { hex: '#F8FAF0', swatch: 'light', labelTone: 'dark' },
    { hex: '#C7C6C2', swatch: 'warmGray', labelTone: 'dark' },
    { hex: '#8D9287', swatch: 'mediumGreen', labelTone: 'light' },
    { hex: '#55624C', swatch: 'darkGreen', labelTone: 'light' },
    { hex: '#2F342B', swatch: 'veryDark', labelTone: 'light' },
  ],
}

export const designHeader: SectionHeaderData = {
  number: '02',
  title: 'Propuesta de diseño',
  description:
    'A través de sus cuatro secciones, la plataforma permite explorar los servicios que ofrece el estudio, descubrir sus proyectos, conocer al talento humano y facilitar el contacto.',
}

export const articles: Article[] = [
  {
    id: 'services',
    title: 'Servicios',
    description:
      'La página de Servicios emplea un diseño de bloques alternados para presentar tres áreas clave (Dirección de obra, Cálculo estructural, Visualización 3D). Utiliza descripciones concisas que se intercalan con fotografías contextuales demostrando la aplicación real de cada servicio.',
    media: {
      kind: 'image',
      src: '/images/projects/section-services-terra.webp',
      alt: 'Servicios — Estudio Terra',
    },
  },
  {
    id: 'projects',
    title: 'Proyectos',
    description:
      'Se dividieron los proyectos en residenciales y comerciales para guiar al usuario en su búsqueda. A solicitud del estudio, se detalló el concepto, los objetivos y el diseño de cada proyecto intercalando planos técnicos con fotografías para ofrecer una experiencia atractiva y completa.',
    media: {
      kind: 'video',
      src: '/videos/video-proyects-terra.mp4',
      label: 'Video de proyectos — Estudio Terra',
    },
  },
  {
    id: 'contact',
    title: 'Contacto',
    description:
      'Con el contraste de color dividimos las opciones de contacto que tiene el usuario. El formulario integrado destaca sobre el fondo oscuro para fomentar el envío de mensajes desde la web, mientras que en la sección inferior el usuario encuentra formas de contacto tradicionales y la ubicación física del estudio.',
    media: {
      kind: 'image',
      src: '/images/projects/section-contact-terra.webp',
      alt: 'Contacto — Estudio Terra',
    },
  },
  {
    id: 'about',
    title: 'Nosotros',
    description:
      'Para transmitir confianza y seriedad, la sección "Nosotros" presenta la trayectoria de los miembros del estudio acompañada de sus fotografías. El recorrido visual finaliza estratégicamente en un bloque inferior de alto contraste cromático que aloja el Call to Action (CTA), invitando al usuario a establecer contacto.',
    media: {
      kind: 'image',
      src: '/images/projects/section-us-terra.webp',
      alt: 'Nosotros — Estudio Terra',
    },
  },
]

export const responsive: ResponsiveData = {
  number: '03',
  title: 'Diseño responsive',
  description:
    'El proyecto cuenta con diseño responsive, asegurando que la interfaz se adapte a cualquier pantalla. Esto garantiza una experiencia fluida y accesible al usuario tanto en dispositivos móviles como en computadoras.',
  videoSrc: '/videos/responsive-design-terra.mp4',
  videoLabel: 'Mockup responsive — Estudio Terra',
}

export const social: SocialData = {
  number: '04',
  title: 'Presencia en redes',
  description:
    'Para potenciar el Brand Awareness en redes sociales, diseñé una pieza de Motion Design en After Effects. El objetivo es que este primer punto de contacto mantenga una coherencia visual con la plataforma web.',
  videoSrc: '/videos/promoting-video-terra.mp4',
  videoLabel: 'Video promocional — Estudio Terra',
}

export const learnings: LearningsData = {
  number: '05',
  title: 'Aprendizaje',
  items: [
    {
      title: 'Calidad fotográfica y su impacto visual',
      text: 'Este proyecto me enseñó que, especialmente en rubros hipervisuales como la arquitectura, el impacto estético final del producto digital está intimamente ligado a la calidad del material fotográfico y los renders provistos por el cliente ya que las imágenes afectan no solo el diseño, sino la percepción de valor y confianza que su marca transmite al usuario final.',
    },
    {
      title: 'La experiencia completa de marca',
      text: 'Aprendí que el diseño va más allá de la interfaz. Todo con lo que el usuario interactúa, ya sea un video o la propia web, debe mantener la misma identidad visual para transmitir solidez y confianza.',
    },
  ],
}
