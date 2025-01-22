import { useContext } from "react"
import { LogContext } from "@/contexts/LogContext"
import AddButton from "@/components/AddButton/AddButton"

import styles from './NoLogsMessage.module.css'

const NoLogsMessage = ({ onAddClicked }: { onAddClicked: () => void }) => {
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
      <AddButton onClick={onAddClicked} extraStyles={addButtonStyles} />
      <span>Nuevo registro</span>
    </div>
  )
}

export default NoLogsMessage