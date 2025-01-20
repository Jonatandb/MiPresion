import { useState } from 'react'
import Modal from '../Modal/Modal'
import BloodPressureLevels from '../BloodPressureLevels/BloodPressureLevels'
import { useThemeContext } from '@/hooks/useTheme'
import styles from './Settings.module.css'

const Settings = ({ onClose }: { onClose: () => void }) => {
  const [showLevels, setShowLevels] = useState(false)
  const { theme, toggleTheme } = useThemeContext()

  const handleCloseModalLevels = () => {
    setShowLevels(false)
  }

  return (
    <div className={styles.settingsContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <h2>Ajustes</h2>

        <span className={styles.rowTitle}>GUARDAR / IMPRIMIR</span>
        <div className={styles.row} onClick={() => { alert('Funcionalidad no implementada') }}>
          <span>📄 Exportar a PDF</span>
          🚧
        </div>

        <span className={styles.rowTitle}>PERSONALIZAR</span>
        <div className={styles.row} onClick={() => toggleTheme()}>
          <span>{theme === 'light' ? '🌙' : '🌞'} Activar Tema {theme === 'light' ? 'Oscuro' : 'Claro'}</span>
        </div>

        <span className={styles.rowTitle}>&nbsp;</span>
        <div className={styles.row} onClick={() => setShowLevels(true)}>
          <span>📈 Tabla de niveles de presión</span>
          <span className={styles.arrow}>&gt;</span>
        </div>
        <div className={styles.row} onClick={() => { alert('Funcionalidad no implementada') }}>
          <span>✉ Errores & Contácto</span>
          🚧
        </div>

      </div>
      <Modal onClose={handleCloseModalLevels} isOpen={showLevels}>
        <BloodPressureLevels onClose={handleCloseModalLevels} />
      </Modal>
    </div>
  )
}

export default Settings