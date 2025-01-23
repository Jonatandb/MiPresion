import Logo from "@/components/Logo/Logo"
import SettingsIcon from "@/components/SettingsIcon/SettingsIcon"
import ToggleTheme from "@/components/ToggleTheme/ToggleTheme"

import styles from "./Header.module.css"

interface HederProps {
  onSettingsClicked: () => void
}

const Header = ({ onSettingsClicked }: HederProps) => {
  return (
    <header>
      <Logo />
      <div className={`${styles.iconsRightContainer}`}>
        <ToggleTheme />
        <SettingsIcon onClick={onSettingsClicked} />
      </div>
    </header>
  )
}

export default Header