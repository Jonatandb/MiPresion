import { useContext } from "react"
import Log from "@/components/Log/Log"
import { LogContext } from "@/contexts/LogContext"
import formatDate from "@/utils/formatDate.ts"
import styles from "./LogsList.module.css"

const LogsList = () => {
  const { logs } = useContext(LogContext)

  return (
    <section className={styles.logsListContainer}>
      {
        logs.map(log => (
          <Log key={log.id} {...log} date={formatDate(log.date)} />
        ))
      }
    </section>
  )
}

export default LogsList