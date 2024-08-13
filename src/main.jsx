import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Home } from './pages/Home'
import { Error } from './pages/Error'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Error></Error>
  </StrictMode>,
)
