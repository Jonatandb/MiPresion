import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Logo from "@/components/Logo/Logo"
import QuestionIcon from "@/assets/svg/question.svg?react"
import WarningIcon from "@/assets/svg/warning.svg?react"
import ChartIcon from "@/assets/svg/chart.svg?react"
import StorageIcon from "@/assets/svg/storage.svg?react"
import News from "@/components/News/News"
import Seo from "../SEO/SEO"

import styles from "./Help.module.css"

const Help = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isChildRoute = location.pathname !== "/help"

  return (
    <>
      <Seo title="Ayuda" />

      <div className={styles.helpContainer} onTouchMove={e => e.stopPropagation()}>
        <div className={styles.header}>
          <Logo />
          <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
        </div>
        <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
          {!isChildRoute && (
            <>
              <h2 className={styles.title}>Ayuda</h2>

              <span className={styles.rowTitle}></span>
              <div className={styles.row} onClick={() => navigate("/help/measurementguide")}>
                <QuestionIcon width="1.25rem" height="1.25rem" />
                <span>¿Cómo me tomo la presión?</span>
              </div>

              <span className={styles.rowTitle}></span>
              <div className={styles.row} onClick={() => navigate("/help/outofrangevalues")}>
                <WarningIcon width="1.25rem" height="1.25rem" />
                <span>¿Qué es "Valores fuera de rango"?</span>
              </div>

              <span className={styles.rowTitle}></span>
              <div className={styles.row} onClick={() => navigate("/help/arrythmia")}>
                <QuestionIcon width="1.25rem" height="1.25rem" />
                <span>¿Qué es "Arritmia (latido irregular)"?</span>
              </div>

              <span className={styles.rowTitle}></span>
              <div className={styles.row} onClick={() => navigate("/help/bloodpressurelevels")}>
                <ChartIcon width="1.25rem" height="1.25rem" />
                <span>Tabla de niveles de presión</span>
              </div>

              <span className={styles.rowTitle}></span>
              <div className={styles.row} onClick={() => navigate("/help/storage")}>
                <StorageIcon width="1.25rem" height="1.25rem" />
                <span>¿Dónde se guardan mis datos?</span>
              </div>
              <span className={styles.rowTitle}></span>
              <span className={styles.rowTitle}></span>

              <News />
            </>
          )}

          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Help