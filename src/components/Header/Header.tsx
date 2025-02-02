import Logo from "@/components/Logo/Logo"
import ToggleThemeIconButton from "@/components/Header/ToggleThemeIconButton/ToggleThemeIconButton"
import HelpIconButton from "@/components/Header/HelpIconButton/HelpIconButton"
import SettingsIconButton from "@/components/Header/SettingsIconButton/SettingsIconButton"
import GeneratePDFIconButton from "@/components/Header/GeneratePDFIconButton/GeneratePDFIconButton"

import styles from "./Header.module.css"

const Header = () => {

  return (
    <header>
      <Logo />
      <div className={`${styles.iconsRightContainer}`}>
        <ToggleThemeIconButton />
        <SettingsIconButton />
        <HelpIconButton />
        <GeneratePDFIconButton />
      </div>
    </header>
  )
}

export default Header