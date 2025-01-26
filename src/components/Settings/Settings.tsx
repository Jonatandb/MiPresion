import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Logo from "@/components/Logo/Logo"
import { useLogContext } from "@/hooks/useLogContext"
import { useThemeContext } from "@/hooks/useTheme"
import SocialMedia from "@/components/SocialMedia/SocialMedia"
import Donate from "@/components/Donate/Donate"
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
              <div>
                <span className={styles.optionIcon}>📄</span>
                <span>Exportar a PDF</span>
              </div>
            </div>

            <span className={styles.rowTitle}>INFORMACIÓN</span>
            <div className={styles.row} onClick={() => navigate("/settings/bloodpressurelevels")}>
              <div>
                <span className={styles.optionIcon}>📈</span>
                <span>Tabla de niveles de presión</span>
              </div>
            </div>

            <span className={styles.rowTitle}>PERSONALIZAR</span>
            <div className={styles.row} onClick={() => toggleTheme()}>
              <div>
                <span className={styles.optionIcon}>{theme === "light" ? "🌙" : "🌞"}</span>
                <span>Activar Tema {theme === "light" ? "Oscuro" : "Claro"}</span>
              </div>
            </div>
            <div className={`${styles.row} ${logs.length === 0 ? styles.disabled : ""}`} onClick={handleReset}>
              <div>
                <span className={styles.optionIcon}>🗑</span>
                <span>Eliminar todas las mediciones</span>
              </div>
            </div>

            <span className={styles.rowTitle}>CONTACTO</span>
            <div className={styles.row} onClick={() => navigate("/settings/contact")}>
              <div>
                <span className={styles.optionIcon}>✉</span>
                <span>¿Errores? ¿Sugerencias?</span>
              </div>
            </div>

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