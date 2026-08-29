import type { ComponentType } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { projects } from '@/data/projects'
import { EstudioTerra } from './estudio-terra/EstudioTerra'

const projectPages: Record<string, ComponentType> = {
  'estudio-terra': EstudioTerra,
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const PageComponent = slug ? projectPages[slug] : undefined

  if (!PageComponent || !project) {
    return <Navigate to="/" replace />
  }

  return <PageComponent />
}
