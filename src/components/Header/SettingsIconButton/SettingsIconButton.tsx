import { useNavigate } from "react-router-dom"
import GearIcon from "@/assets/svg/gear.svg?react"

import styles from "./SettingsIconButton.module.css"

const SettingsIconButton = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate("/settings")}
      aria-label={"Ícono de ajustes"}
      role="button"
      className={styles.settingsIconButton}
    >
      <GearIcon width="1.5rem" height="1.5rem" />
    </button>
  )
}

export default SettingsIconButton