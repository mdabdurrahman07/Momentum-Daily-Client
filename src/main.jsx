import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Providers/AuthProvider.jsx'
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <HelmetProvider>
   <RouterProvider router={router} />
    <Toaster/>
    </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>
)
