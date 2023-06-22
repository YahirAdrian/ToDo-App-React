import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/app.css'
import Layout from './components/Layout'
import Panel from './pages/Panel'
import List from './pages/List'
import Settings from './pages/Settings'
import {loader as listLoader} from './pages/List'
import {loader as mainPageLoader, action as mainPageAction} from './pages/Panel'
import {action as newTaskAction} from './components/Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: mainPageLoader,
    action: newTaskAction,
    children: [
      {
        index: true,
        element: <Panel />, 
        loader: mainPageLoader,
        action: mainPageAction
      }, 
      {
        path: '/lista/:listId',
        element: <List />,
        loader: listLoader
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
