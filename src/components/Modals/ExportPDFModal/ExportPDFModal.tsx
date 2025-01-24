import Logo from "@/components/Logo/Logo"
import ExportPDFReport from "@/components/ExportPDFReport/ExportPDFReport"

import styles from "./ExportPDFModal.module.css"

interface ExportPDFModalProps {
  onClose: () => void
}

const ExportPDFModal = ({ onClose }: ExportPDFModalProps) => {
  return (
    <div className={styles.exportPDFModalContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <h2 className={styles.title}>Exportar a PDF</h2>
        <ExportPDFReport />
      </div>
    </div>
  )
}

export default ExportPDFModal