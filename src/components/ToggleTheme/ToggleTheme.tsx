import { useTheme } from "@/hooks/useTheme"
import moon from '@/assets/moon.png'
import sun from '@/assets/sun.png'

import './styles.css'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <img
      id="toggleThemeLogo"
      onClick={toggleTheme}
      src={theme === 'light' ? moon : sun}
      alt="Ícono cambiar a tema oscuro/claro"
      title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'} `}
      height={30}
    />
  )
}


export default ToggleTheme