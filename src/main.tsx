import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import { LogContextProvider } from '@/contexts/LogContext'
import '@/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LogContextProvider>
        <App />
      </LogContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
