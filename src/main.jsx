import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/app.css'
import Layout from './components/Layout'
import Panel from './pages/Panel'
import List from './pages/List'
import Settings from './pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Panel />
      }, 
      {
        path: '/lista/:lista',
        element: <List />
      },
      {
        path: '/configuracion',
        element: <Settings />
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
