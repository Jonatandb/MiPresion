import { useState } from 'react'
import Modal from '@/components/Modal/Modal'
import BloodPressureLevels from '@/components/BloodPressureLevels/BloodPressureLevels'
import { useThemeContext } from '@/hooks/useTheme'
import styles from './Settings.module.css'
import About from '../About/About'
import { useLogContext } from '@/hooks/useLogContext'

const Settings = ({ onClose }: { onClose: () => void }) => {
  const { theme, toggleTheme } = useThemeContext()
  const { logs, resetLogs } = useLogContext()

  const [modalType, setModalType] = useState<"bloodPressureLevels" | "about">()

  const handleCloseModal = () => {
    setModalType(undefined)
  }

  const handleReset = () => {
    if (logs.length > 0 && confirm('Estas seguro de eliminar todos los registros?')) {
      resetLogs()
    }

  }

  return (
    <div className={styles.settingsContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <h2>Ajustes</h2>

        <span className={styles.rowTitle}>GUARDAR / IMPRIMIR</span>
        <div className={`${styles.row} ${styles.disabled}`} onClick={() => { alert('Funcionalidad no implementada') }}>
          <div>
            <span className={styles.optionIcon}>📄</span>
            <span>Exportar a PDF</span>
          </div>
          <span>
            🚧
          </span>
        </div>

        <span className={styles.rowTitle}>INFORMACIÓN</span>
        <div className={styles.row} onClick={() => setModalType("bloodPressureLevels")}>
          <div>
            <span className={styles.optionIcon}>📈</span>
            <span>Tabla de niveles de presión</span>
          </div>
          <span className={styles.arrow}>➡</span>
        </div>

        <span className={styles.rowTitle}>PERSONALIZAR</span>
        <div className={styles.row} onClick={() => toggleTheme()}>
          <div>
            <span className={styles.optionIcon}>{theme === 'light' ? '🌙' : '🌞'}</span>
            <span>Activar Tema {theme === 'light' ? 'Oscuro' : 'Claro'}</span>
          </div>
        </div>

        <div className={`${styles.row} ${logs.length === 0 ? styles.disabled : ''}`} onClick={handleReset}>
          <div>
            <span className={styles.optionIcon}>🗑</span>
            <span>Eliminar todos los registros</span>
          </div>
        </div>

        <span className={styles.rowTitle}>&nbsp;</span>
        <div className={styles.row} onClick={() => setModalType("about")}>
          <div>
            <span className={styles.optionIcon}>✉</span>
            <span>Errores & Contácto</span>
          </div>
        </div>
      </div>

      {modalType && (
        <Modal onClose={handleCloseModal} isOpen={true}>
          {modalType === "bloodPressureLevels" && <BloodPressureLevels onClose={handleCloseModal} />}
          {modalType === "about" && <About onClose={handleCloseModal} />}
        </Modal>
      )}

    </div>
  )
}

export default Settings