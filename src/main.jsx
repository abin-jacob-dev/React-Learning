import { createContext, createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyApp from './MyApp'

createRoot(document.getElementById('root')).render(
  <MyApp />,
)
