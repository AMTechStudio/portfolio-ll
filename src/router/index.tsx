import { createBrowserRouter } from 'react-router-dom'
import { GlobalError } from '@/components/errors/GlobalError/GlobalError'
import { RootLayout } from '@/components/layout/RootLayout/RootLayout'
import { HomePage } from '@/pages/home/HomePage'
import { ProjectPage } from '@/pages/project-page/ProjectPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <GlobalError />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/project/:slug', element: <ProjectPage /> },
    ],
  },
])
