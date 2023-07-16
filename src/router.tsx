import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './constants/urls'
import { Root } from './Root'
import { NotFound } from './pages/404/404'
import { Main } from './pages/main'
import { About } from './pages/about'
import { Contact } from './pages/contact'

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <Main />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
    ],
  },
])
