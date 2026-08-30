import { createBrowserRouter } from 'react-router-dom'
import { GlobalError } from '@/components/errors/GlobalError/GlobalError'
import { RootLayout } from '@/components/layout/RootLayout/RootLayout'
import { HomePage } from '@/pages/home/HomePage'
import { ProjectPage } from '@/pages/project-page/ProjectPage'
import { ROUTES } from './paths'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <GlobalError />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.projectPattern, element: <ProjectPage /> },
    ],
  },
])
