import { useState } from "react"
import About from "@/components/About/About"
import BloodPressureLevelsModal from "@/components/Modals/BloodPressureLevelsModal/BloodPressureLevelsModal"
import ExportPDFModal from "@/components/Modals/ExportPDFModal/ExportPDFModal"
import Logo from "@/components/Logo/Logo"
import Modal from "@/components/Modal/Modal"
import { useLogContext } from "@/hooks/useLogContext"
import { useThemeContext } from "@/hooks/useTheme"
import SocialMedia from "@/components/SocialMedia/SocialMedia"
import Donate from "@/components/Donate/Donate"

import styles from "./Settings.module.css"

const Settings = ({ onClose }: { onClose: () => void }) => {
  const { theme, toggleTheme } = useThemeContext()
  const { logs, resetLogs } = useLogContext()
  const [modalType, setModalType] = useState<"bloodPressureLevels" | "about" | "exportPDFReport">()

  const thereAreLogs = logs.length > 0

  const handleCloseModal = () => {
    setModalType(undefined)
  }

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
        <h2 className={styles.title}>Ajustes</h2>

        <span className={styles.rowTitle}>GUARDAR / IMPRIMIR</span>
        <div className={`${styles.row} ${!thereAreLogs && styles.disabled}`} onClick={() => setModalType("exportPDFReport")}>
          <div>
            <span className={styles.optionIcon}>📄</span>
            <span>Exportar a PDF</span>
          </div>
        </div>

        <span className={styles.rowTitle}>INFORMACIÓN</span>
        <div className={styles.row} onClick={() => setModalType("bloodPressureLevels")}>
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
        <div className={styles.row} onClick={() => setModalType("about")}>
          <div>
            <span className={styles.optionIcon}>✉</span>
            <span>¿Errores? ¿Sugerencias?</span>
          </div>
        </div>

        <SocialMedia />

        <Donate />

      </div>

      {modalType && (
        <Modal onClose={handleCloseModal} isOpen={true}>
          {modalType === "bloodPressureLevels" && <BloodPressureLevelsModal onClose={handleCloseModal} />}
          {modalType === "about" && <About onClose={handleCloseModal} />}
          {modalType === "exportPDFReport" && <ExportPDFModal onClose={handleCloseModal} />}
        </Modal>
      )}

    </div>
  )
}

export default Settings