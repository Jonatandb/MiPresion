import Logo from "@/components/Logo/Logo"
import DataStorage from "@/components/DataStorage/DataStorage"

import styles from "./DataStorageWrapper.module.css"

const DataStorageWrapper = ({ onClose }: { onClose: () => void }) => {
  return (
    <section className={styles.dataStorageWrapperContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <DataStorage />
      </div>
    </section>
  )
}
export default DataStorageWrapper
