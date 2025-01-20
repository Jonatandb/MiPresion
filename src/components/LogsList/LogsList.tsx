import { useContext } from 'react'
import Log from '@/components/Log/Log'
import { LogContext } from '@/contexts/LogContext'

import styles from './LogsList.module.css'

const LogsList = () => {
  const { logs } = useContext(LogContext)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      month: 'short' as const,
      day: 'numeric' as const,
      hour: 'numeric' as const,
      minute: 'numeric' as const,
    };
    const formatter = new Intl.DateTimeFormat('es-ES', options);
    return formatter.format(date);
  };

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