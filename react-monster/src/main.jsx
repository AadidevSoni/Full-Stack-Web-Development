import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Practice from './Practice'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Practice />
    <br />
    <br />
    <br />
    <br />
    <br />
    <App />
  </StrictMode>,
)
