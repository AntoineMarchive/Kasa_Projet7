import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Home } from './pages/Home'
//import { Error } from './pages/Error'
import { Logement } from './pages/Logement'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Logement></Logement>
  </StrictMode>,
)
