import { createContext } from "react"
import { useBrowserTheme } from "@/hooks/useBrowserTheme"

export interface ThemeContextState {
  theme: "light" | "dark",
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextState>({ theme: "light", toggleTheme: () => { } })

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useBrowserTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }

