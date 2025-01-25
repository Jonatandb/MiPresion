import AddButton from "@/components/AddButton/AddButton"

import styles from "./NoLogsMessage.module.css"

const NoLogsMessage = ({ onAddClicked }: { onAddClicked: () => void }) => {
  return (
    <div className={styles.NoLogsMessageContainer}>
      <span>Aún no se agregaron registros</span>
      <div className={styles.buttonContainer} onClick={onAddClicked} >
        <AddButton onClick={() => null} />
        <span>Nuevo registro</span>
      </div>
    </div>
  )
}

export default NoLogsMessage