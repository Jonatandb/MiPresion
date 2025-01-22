import BloodPressureLevels from '@/components/BloodPressureLevels/BloodPressureLevels'
import Logo from '@/components/Logo/Logo'

import styles from './BloodPressureLevelsModal.module.css'

const BloodPressureLevelsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <section className={styles.bloodPressureLevelsModalContainer} onTouchMove={e => e.stopPropagation()}>
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
export default BloodPressureLevelsModal