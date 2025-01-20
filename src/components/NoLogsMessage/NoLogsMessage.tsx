import { LogContext } from "@/contexts/LogContext"
import { useContext } from "react"
import styles from './NoLogsMessage.module.css'
import AddButton from "../AddButton/AddButton"

const NoLogsMessage = ({ onAddLog }: { onAddLog: () => void }) => {
  const { logs } = useContext(LogContext)
  if (logs.length > 0) return null

  const addButtonStyles = {
    addButtonContainer: styles.addButtonContainer,
    imgContainer: styles.imgContainer
  }

  return (
    <div className={styles.NoLogsMessageContainer}>
      <span>
        Aún no se agregaron registros
      </span>
      <AddButton onClick={onAddLog} extraStyles={addButtonStyles} />
      <span>Nuevo registro</span>
    </div>
  )
}

export default NoLogsMessage