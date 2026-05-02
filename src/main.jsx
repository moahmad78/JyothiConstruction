import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('%c 🛡️ PRECISION ENGINEERED BY SAHIL SHEIKH | IG: @SAHIL_SHEIKH78 ', 'background: #1a1a1a; color: #C5A059; border: 1px solid #C5A059; padding: 8px; font-family: monospace; font-weight: bold; border-radius: 4px;');
console.log('Connect with the creator: https://www.instagram.com/sahil_sheikh78/');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
