import { useThemeContext } from "@/hooks/useTheme"
import MoonIcon from "@/assets/svg/moon.svg?react"
import SunIcon from "@/assets/svg/sun.svg?react"

import styles from "./ToggleThemeIconButton.module.css"

const ToggleThemeIconButton = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      onClick={toggleTheme}
      aria-label={"Ícono de cambio de tema claro/oscuro"}
      role="button"
      className={styles.toggleThemeIconButton}
    >
      {theme === "light" ?
        <MoonIcon width="1.5rem" height="1.5rem" />
        :
        <SunIcon width="1.5rem" height="1.5rem" />
      }
    </button>
  )
}

export default ToggleThemeIconButton
