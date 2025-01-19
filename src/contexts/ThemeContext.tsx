import { createContext } from "react";
import { useBrowserTheme } from "../hooks/useBrowserTheme";

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } })

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useBrowserTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


export { ThemeContext, ThemeProvider }

