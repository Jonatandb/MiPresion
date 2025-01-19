import Logo from '@/components/Logo/Logo'
import SettingsIcon from '@/components/SettingsIcon/SettingsIcon'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme'

import './styles.css'

const Header = () => {

  return (
    <header>
      <div id="titleContainer">
        <Logo />
        <h1 id="mainTitle">
          Registros
        </h1>
      </div>

      <div id="iconsRightContainer">
        <ToggleTheme />
        <SettingsIcon />
      </div>
    </header>
  )
}

export default Header