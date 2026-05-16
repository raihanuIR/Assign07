import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'

import FriendDetails from './pages/FriendDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'friend/:id',
        element: <FriendDetails />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
