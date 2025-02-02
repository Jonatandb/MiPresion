import { useNavigate } from "react-router-dom"
import SocialMedia from "@/components/SocialMedia/SocialMedia"
import { Theme } from "@/contexts/ThemeEnum"
import { useThemeContext } from "@/hooks/useTheme"

import QuestionIcon from "@/assets/svg/question.svg?react"
import MoonIcon from "@/assets/svg/moon.svg?react"
import SunIcon from "@/assets/svg/sun.svg?react"

import styles from "./Shortcuts.module.css"

const Shortcuts = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useThemeContext()

  return (
    <div className={styles.shortcutsContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <h2 className={styles.title}>Accesos directos</h2>

        <span className={styles.rowTitle}></span>
        <div className={styles.row} onClick={() => navigate("/help/measurementguide")}>
          <QuestionIcon width="1.25rem" height="1.25rem" />
          <span>¿Cómo me tomo la presión?</span>
        </div>

        <span className={styles.rowTitle}></span>
        <div className={styles.row} onClick={() => navigate("/help/arrythmia")}>
          <QuestionIcon width="1.25rem" height="1.25rem" />
          <span style={{ fontSize: "0.7rem" }}>¿Qué es "Arritmia, latido irregular"?</span>
        </div>

        <span className={styles.rowTitle}></span>
        <div className={styles.row} onClick={() => toggleTheme()}>
          {theme === Theme.Light ?
            <MoonIcon width="1.25rem" height="1.25rem" />
            :
            <SunIcon width="1.25rem" height="1.25rem" />}
          <span>Activar Tema {theme === Theme.Light ? "Oscuro" : "Claro"}</span>
        </div>

        <span className={styles.rowTitle}></span>
        <span className={styles.rowTitle}></span>

        <SocialMedia />

      </div>
    </div>
  )
}

export default Shortcuts