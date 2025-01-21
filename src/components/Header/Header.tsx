import Logo from '@/components/Logo/Logo'
import SettingsIcon from '@/components/SettingsIcon/SettingsIcon'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme'

import styles from './Header.module.css'

interface HederProps {
  onSettingsClicked: () => void
}

const Header = ({ onSettingsClicked }: HederProps) => {

  return (
    <header>
      <div className={`${styles.titleContainer}`}>
        <Logo />
        <div className={`${styles.appTitle}`}>
          <h1>
            MiPresión
          </h1>
          <span>
            Registro de presión sanguínea
          </span>
        </div>
      </div>

      <div className={`${styles.iconsRightContainer}`}>
        <ToggleTheme />
        <SettingsIcon onClick={onSettingsClicked} />
      </div>
    </header>
  )
}

export default Header