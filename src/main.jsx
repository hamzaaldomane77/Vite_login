import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import HOOKS from './Components/Hooks/Hooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HOOKS />
 
  </StrictMode>,
)
