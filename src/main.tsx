import React from "react"
import ReactDOM from "react-dom/client"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ThemeContextProvider } from "@/contexts/ThemeContext"
import { LogContextProvider } from "@/contexts/LogContext"
import App from "@/App"
import { initializeGA } from "@/utils/analytics"

import "@/styles.css"

initializeGA()

const basename = import.meta.env.MODE === "development" ? "/" : "/MiPresion"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LogContextProvider>
        <Router basename={basename}>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </Router>
      </LogContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
