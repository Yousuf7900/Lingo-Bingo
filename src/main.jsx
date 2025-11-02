import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Root from './Components/Root'
import Home from './Pages/Home'
import Errorpage from './Pages/Errorpage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import StartLearning from './Pages/StartLearning'
import Tutorials from './Pages/Tutorials'
import AboutUs from './Pages/AboutUs'
import AuthProvider from './AuthProvider/AuthProvider'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/start-learning',
          element: <StartLearning></StartLearning>
        },
        {
          path: '/tutorials',
          element: <Tutorials></Tutorials>
        },
        {
          path: '/about-us',
          element: <AboutUs></AboutUs>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
