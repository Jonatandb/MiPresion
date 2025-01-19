import Log from '@/components/Log/Log'

import './styles.css'

import data from '@/../mockData/data.json'
import { LogData } from '../AddEditLog/AddEditLog'

const registers: LogData[] = data

const LogsList = () => {
  return (
    <section id="logsListContainer">
      {
        registers.map(log => (
          <Log key={log.id} {...log} />
        ))
      }
    </section>
  )
}

export default LogsList