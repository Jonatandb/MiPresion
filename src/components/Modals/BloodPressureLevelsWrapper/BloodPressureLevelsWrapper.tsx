import Logo from "@/components/Logo/Logo"
import BloodPressureLevels from "@/components/BloodPressureLevels/BloodPressureLevels"

import styles from "./BloodPressureLevelsWrapper.module.css"

const BloodPressureLevelsWrapper = ({ onClose }: { onClose: () => void }) => {
  return (
    <section className={styles.bloodPressureLevelsWrapperContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <BloodPressureLevels />
      </div>
    </section>
  )
}
export default BloodPressureLevelsWrapper