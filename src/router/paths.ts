export const ROUTES = {
  home: '/',
  projectsHash: '/#projects',
  project: (slug: string) => `/project/${slug}`,
  projectPattern: '/project/:slug',
} as const
