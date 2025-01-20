import Logo from '@/components/Logo/Logo'
import SettingsIcon from '@/components/SettingsIcon/SettingsIcon'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme'

import './styles.css'

const Header = ({ onSettingsClicked }: { onSettingsClicked: () => void }) => {

  return (
    <header>
      <div id="titleContainer">
        <Logo />
        <h1 id="mainTitle">
          Registro de presión sanguínea
        </h1>
      </div>

      <div id="iconsRightContainer">
        <ToggleTheme />
        <SettingsIcon onClick={onSettingsClicked} />
      </div>
    </header>
  )
}

export default Header