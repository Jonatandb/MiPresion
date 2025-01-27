import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Logo from "@/components/Logo/Logo"
import SocialMedia from "@/components/SocialMedia/SocialMedia"
import Donate from "@/components/Donate/Donate"

import QuestionIcon from "@/assets/svg/question.svg?react"
import WarningIcon from "@/assets/svg/warning.svg?react"
import ChartIcon from "@/assets/svg/chart.svg?react"

import styles from "./Help.module.css"

const Help = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isChildRoute = location.pathname !== "/help"

  return (
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
              <QuestionIcon width={20} height={20} />
              <span>¿Cómo me tomo la presión?</span>
            </div>

            <span className={styles.rowTitle}></span>
            <div className={styles.row} onClick={() => navigate("/help/outofrangevalues")}>
              <WarningIcon width={20} height={20} />
              <span>¿"Valores fuera de rango"?</span>
            </div>

            <span className={styles.rowTitle}></span>
            <div className={styles.row} onClick={() => navigate("/help/bloodpressurelevels")}>
              <ChartIcon width={20} height={20} />
              <span>Tabla de niveles de presión</span>
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

export default Help