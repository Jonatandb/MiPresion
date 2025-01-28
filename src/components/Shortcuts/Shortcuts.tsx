import { useNavigate } from "react-router-dom"
import SocialMedia from "@/components/SocialMedia/SocialMedia"
import Donate from "@/components/Donate/Donate"

import QuestionIcon from "@/assets/svg/question.svg?react"
import EmailIcon from "@/assets/svg/email.svg?react"
import ChartIcon from "@/assets/svg/chart.svg?react"

import styles from "./Shortcuts.module.css"

const Shortcuts = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.shortcutsContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <h2 className={styles.title}>Accesos directos</h2>

        <span className={styles.rowTitle}></span>
        <div className={styles.row} onClick={() => navigate("/help/measurementguide")}>
          <QuestionIcon width={20} height={20} />
          <span>¿Cómo me tomo la presión?</span>
        </div>

        <span className={styles.rowTitle}></span>
        <div className={styles.row} onClick={() => navigate("/help/bloodpressurelevels")}>
          <ChartIcon width={20} height={20} />
          <span>Tabla de niveles de presión</span>
        </div>

        <span className={styles.rowTitle}></span>
        <div className={styles.row} onClick={() => navigate("/settings/contact")}>
          <EmailIcon width={20} height={20} />
          <span>¿Sugerencias? ¿Errores?</span>
        </div>

        <span className={styles.rowTitle}></span>
        <span className={styles.rowTitle}></span>

        <SocialMedia />
        <Donate />

      </div>
      <div>&nbsp;</div>
    </div>
  )
}

export default Shortcuts