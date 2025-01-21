import { useThemeContext } from "@/hooks/useTheme"
import moon from '@/assets/moon.png'
import sun from '@/assets/sun.png'

import styles from './ToggleTheme.module.css'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <img
      className={`${styles.toggleThemeLogo}`}
      onClick={toggleTheme}
      src={theme === 'light' ? moon : sun}
      alt="Ícono cambiar a tema claro u oscuro"
      title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'} `}
      height={30}
      width={30}
    />
  )
}


export default ToggleTheme