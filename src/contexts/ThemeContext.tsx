import { createContext } from "react";
import { useBrowserTheme } from "@/hooks/useBrowserTheme";

interface themeContextType {
  theme: 'light' | 'dark',
  toggleTheme: () => void
}

const ThemeContext = createContext<themeContextType>({ theme: 'light', toggleTheme: () => { } })

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useBrowserTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


export { ThemeContext, ThemeProvider }

