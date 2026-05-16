import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import TimelineProvider from './Context/TimelineProvider'
import FriendDetails from './pages/FriendDetails'
import Timeline from './pages/Timeline'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Stats from './pages/Stats'


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
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider 
        router={router} 
        fallbackElement={<span className="loading loading-dots loading-xl text-[#2b4a3f]"></span>} 
      />
      <ToastContainer position="top-center" />
    </TimelineProvider>
  </StrictMode>,
)
