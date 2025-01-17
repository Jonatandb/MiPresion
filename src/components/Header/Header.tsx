import Logo from '../Logo/Logo'
import SettingsIcon from '../SettingsIcon/SettingsIcon'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

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