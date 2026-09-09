import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export const projectPages: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {
  'estudio-terra': lazy(() =>
    import('./estudio-terra/EstudioTerra').then((m) => ({
      default: m.EstudioTerra,
    })),
  ),
}
