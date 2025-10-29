import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import { WellnessProvider } from './state/WellnessStore'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WellnessProvider>
        <App />
      </WellnessProvider>
    </BrowserRouter>
  </React.StrictMode>
)


