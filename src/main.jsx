import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='dark:text-white bg-gray-50 dark:bg-gray-700'>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position='top-center'></ToastContainer>
      </AuthProvider>
    </div>
  </StrictMode>,
)
