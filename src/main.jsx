import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BfTable from './pages/BfTable.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Measures from './pages/Measures.jsx'
import AboutUs from './pages/AboutUs.jsx'


  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/TabelasBf',
      element: <BfTable />,
    },
    {
      path: '/Medidas',
      element: <Measures />,
    },
    {
      path: '/Sobre',
      element: <AboutUs />,
    }
  ]);

  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
