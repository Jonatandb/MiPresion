import Logo from "@/components/Logo/Logo"
import BloodPressureMeasurementGuide from "@/components/BloodPressureMeasurementGuide/BloodPressureMeasurementGuide"

import styles from "./BloodPressureMeasurementGuideWrapper.module.css"

const BloodPressureMeasurementGuideWrapper = ({ onClose }: { onClose: () => void }) => {
  return (
    <section className={styles.bloodPressureMeasurementGuideWrapperContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <BloodPressureMeasurementGuide />
      </div>
    </section>
  )
}
export default BloodPressureMeasurementGuideWrapper