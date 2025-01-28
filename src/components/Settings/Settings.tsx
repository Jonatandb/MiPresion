import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useLogContext } from "@/hooks/useLogContext"
import { useThemeContext } from "@/hooks/useTheme"
import Logo from "@/components/Logo/Logo"
import SocialMedia from "@/components/SocialMedia/SocialMedia"
import Donate from "@/components/Donate/Donate"

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
            <div className={`${styles.row} ${!thereAreLogs && styles.disabled}`} onClick={() => navigate("/settings/exportpdf")}>
              <PdfIcon width={20} height={20} />
              <span>Exportar a PDF</span>
            </div>

            <span className={styles.rowTitle}>PERSONALIZAR</span>
            <div className={styles.row} onClick={() => toggleTheme()}>
              {theme === "light" ?
                <MoonIcon width={20} height={20} />
                :
                <SunIcon width={20} height={20} />}
              <span>Activar Tema {theme === "light" ? "Oscuro" : "Claro"}</span>
            </div>
            <div className={`${styles.row} ${logs.length === 0 ? styles.disabled : ""}`} onClick={handleReset}>
              <TrashIcon width={20} height={20} />
              <span>Eliminar todas las mediciones</span>
            </div>

            <span className={styles.rowTitle}>CONTACTO</span>
            <div className={styles.row} onClick={() => navigate("/settings/contact")}>
              <EmailIcon width={20} height={20} />
              <span>¿Dudas? ¿Sugerencias? ¿Errores?</span>
            </div>

            <span className={styles.rowTitle}></span>
            <span className={styles.rowTitle}></span>

            <SocialMedia />
            <Donate />

          </>
        )}

        <Outlet />
      </div>
    </div>
  )
}

export default Settings