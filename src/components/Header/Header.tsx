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
        <h1 className={`${styles.mainTitle}`}>
          Registro de presión sanguínea
        </h1>
      </div>

      <div className={`${styles.iconsRightContainer}`}>
        <ToggleTheme />
        <SettingsIcon onClick={onSettingsClicked} />
      </div>
    </header>
  )
}

export default Header