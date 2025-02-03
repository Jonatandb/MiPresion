import Logo from "@/components/Logo/Logo"
import ExportPDFReport from "@/components/ExportPDFReport/ExportPDFReport"

import styles from "./ExportPDFReportWrapper.module.css"

interface ExportPDFReportWrapperProps {
  onClose: () => void
}

const ExportPDFReportWrapper = ({ onClose }: ExportPDFReportWrapperProps) => {
  return (
    <div className={styles.exportPDFReportWrapperContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <ExportPDFReport />
      </div>
    </div>
  )
}

export default ExportPDFReportWrapper