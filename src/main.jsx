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
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Profile from './Pages/Profile'
import Lessons from './Pages/Lessons'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from './Components/UpdateProfile'

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
          loader: () => fetch("/japanese_data.json"),
          element: <StartLearning></StartLearning>
        },
        {
          path: '/tutorials',
          loader: () => fetch("/japanese_data.json"),
          element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>
        },
        {
          path: '/about-us',
          element: <AboutUs></AboutUs>
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: '/tutorials/:id',
          element: <PrivateRoute><Lessons></Lessons></PrivateRoute>
        },
        {
          path: '/updateProfile',
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' autoClose={3000}></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
