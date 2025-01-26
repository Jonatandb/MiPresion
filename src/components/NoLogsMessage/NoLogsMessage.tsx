import AddButton from "@/components/AddButton/AddButton"

import styles from "./NoLogsMessage.module.css"

const NoLogsMessage = ({ onAddClicked }: { onAddClicked: () => void }) => {
  return (
    <div className={styles.NoLogsMessageContainer}>
      <span>Aún no se agregaron mediciones</span>
      <div className={styles.buttonContainer} onClick={onAddClicked} >
        <AddButton onClick={() => null} />
        <span>Agregar una medición</span>
      </div>
    </div>
  )
}

export default NoLogsMessage