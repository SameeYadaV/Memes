import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './Router/index.jsx'
import {Provider} from 'react-redux'
import { store } from './Store/index.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store} >
  <RouterProvider router={router} >
    <App/>
   </RouterProvider>
  </Provider>
  </StrictMode>,
)
