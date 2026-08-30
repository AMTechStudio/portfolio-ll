import { Suspense } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { projects } from '@/data/projects'
import { projectPages } from './projectRegistry'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const PageComponent = slug ? projectPages[slug] : undefined

  if (!PageComponent || !project) {
    return <Navigate to="/" replace />
  }

  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  )
}
