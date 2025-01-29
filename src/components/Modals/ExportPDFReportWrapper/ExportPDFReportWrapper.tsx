import Logo from "@/components/Logo/Logo"
import ExportPDFReport from "@/components/ExportPDFReport/ExportPDFReport"
import { useLogContext } from "@/hooks/useLogContext"
import { useEffect, useState } from "react"
import { getOldestAndLatestLogDate } from "@/utils/getOldestAndLatestLogDate"

import styles from "./ExportPDFReportWrapper.module.css"

interface ExportPDFReportWrapperProps {
  onClose: () => void
}

const ExportPDFReportWrapper = ({ onClose }: ExportPDFReportWrapperProps) => {
  const { logs } = useLogContext()
  const [oldestLatest] = useState(() => getOldestAndLatestLogDate(logs))
  const [userFrom, setUserFrom] = useState(oldestLatest.oldestLogDate)
  const [userTo, setUserTo] = useState(oldestLatest.latestLogDate)

  useEffect(() => {
    if (userFrom < oldestLatest.oldestLogDate) setUserFrom(oldestLatest.oldestLogDate)
    if (userTo > oldestLatest.latestLogDate) setUserTo(oldestLatest.latestLogDate)
    if (userFrom > userTo) setUserTo(userFrom)
    if (userTo < userFrom) setUserFrom(userTo)
  }, [userFrom, userTo, oldestLatest])

  return (
    <div className={styles.exportPDFReportWrapperContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <h2 className={styles.title}>Exportar a PDF</h2>

        <p className={styles.description}>Seleccioná el rango de fechas que querés exportar:</p>

        <div className={styles.dateRangeContainer}>
          <label className={styles.label}>Desde:</label>
          <input type="date"
            min={oldestLatest.oldestLogDate}
            max={oldestLatest.latestLogDate}
            value={userFrom}
            onChange={e => setUserFrom(e.target.value)}
          />
          <label className={styles.label}>Hasta:</label>
          <input type="date"
            min={oldestLatest.oldestLogDate}
            max={oldestLatest.latestLogDate}
            value={userTo}
            onChange={e => setUserTo(e.target.value)}
          />
        </div>

        <ExportPDFReport from={userFrom} to={userTo} />
      </div>
    </div>
  )
}

export default ExportPDFReportWrapper