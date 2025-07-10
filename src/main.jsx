import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>

  </StrictMode>,
)
