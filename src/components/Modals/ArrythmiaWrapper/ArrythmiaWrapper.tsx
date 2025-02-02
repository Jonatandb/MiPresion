import Logo from "@/components/Logo/Logo"
import Arrythmia from "@/components/Arrythmia/Arrythmia"

import styles from "./ArrythmiaWrapper.module.css"

const ArrythmiaWrapper = ({ onClose }: { onClose: () => void }) => {
  return (
    <section className={styles.arrythmiaWrapperContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <Arrythmia />
      </div>
    </section>
  )
}
export default ArrythmiaWrapper
