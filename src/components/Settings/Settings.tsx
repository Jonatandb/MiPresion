import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useLogContext } from "@/hooks/useLogContext"
import { useThemeContext } from "@/hooks/useTheme"
import Logo from "@/components/Logo/Logo"
import SocialMedia from "@/components/SocialMedia/SocialMedia"
import Donate from "@/components/Donate/Donate"
import { Theme } from "@/contexts/ThemeEnum"
import Seo from "../SEO/SEO"

import PdfIcon from "@/assets/svg/pdf.svg?react"
import MoonIcon from "@/assets/svg/moon.svg?react"
import SunIcon from "@/assets/svg/sun.svg?react"
import TrashIcon from "@/assets/svg/trash.svg?react"
import EmailIcon from "@/assets/svg/email.svg?react"

import styles from "./Settings.module.css"

const Settings = ({ onClose }: { onClose: () => void }) => {
  const { theme, toggleTheme } = useThemeContext()
  const { logs, resetLogs } = useLogContext()
  const navigate = useNavigate()
  const location = useLocation()

  const thereAreLogs = logs.length > 0

  const isChildRoute = location.pathname !== "/settings"

  const handleReset = () => {
    if (thereAreLogs && confirm("Esta acción no se puede deshacer. ¿Eliminar todas las mediciones?")) {
      resetLogs()
    }
  }

  return (
    <>
      <Seo title="Ajustes" />

      <div className={styles.settingsContainer} onTouchMove={e => e.stopPropagation()}>
        <div className={styles.header}>
          <Logo />
          <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
        </div>
        <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
          {!isChildRoute && (
            <>
              <h2 className={styles.title}>Ajustes</h2>

              <span className={styles.rowTitle}>GUARDAR / IMPRIMIR</span>
              <button className={`${styles.row} ${styles.button}`} onClick={() => navigate("/settings/exportpdf")}>
                <PdfIcon width="1.25rem" height="1.25rem" />
                <span>Exportar a PDF</span>
              </button>

              <span className={styles.rowTitle}>PERSONALIZAR</span>
              <button className={`${styles.row} ${styles.button}`} onClick={() => toggleTheme()}>
                {theme === Theme.Light ?
                  <MoonIcon width="1.25rem" height="1.25rem" />
                  :
                  <SunIcon width="1.25rem" height="1.25rem" />}
                <span>Activar Tema {theme === Theme.Light ? "Oscuro" : "Claro"}</span>
              </button>

              <span className={styles.rowTitle}>MANTENIMIENTO</span>
              <button className={`${styles.row} ${styles.button} ${logs.length === 0 ? styles.disabled : ""}`} onClick={handleReset}>
                <TrashIcon width="1.25rem" height="1.25rem" />
                <span>Eliminar todas las mediciones</span>
              </button>

              <span className={styles.rowTitle}>CONTACTO</span>
              <button className={`${styles.row} ${styles.button}`} onClick={() => navigate("/settings/contact")}>
                <EmailIcon width="1.25rem" height="1.25rem" />
                <span>¿Dudas? ¿Sugerencias? ¿Errores?</span>
              </button>

              <span className={styles.rowTitle}></span>
              <span className={styles.rowTitle}></span>

              <SocialMedia />
              <Donate />

            </>
          )}

          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Settings