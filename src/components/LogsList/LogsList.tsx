import Log from '../Log/Log'

import './styles.css'

import data from '../../../mockData/data.json'

export interface LogData {
  id: string,
  date: string,
  systolic: number,
  diastolic: number,
  pulse: number,
  medicine: boolean,
  notes: string
}

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