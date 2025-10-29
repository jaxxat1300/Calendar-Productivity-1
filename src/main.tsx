import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import { WellnessProvider } from './state/WellnessStore'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <HashRouter>
      <WellnessProvider>
        <App />
      </WellnessProvider>
    </HashRouter>
  </React.StrictMode>
)


