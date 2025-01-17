import Log from '../Log/Log'

import './styles.css'

import data from '../../../mockData/data.json'

const LogsList = () => {
  return (
    <section>
      {
        data.map(log => (
          <Log key={log.id} {...log} />
        ))
      }
    </section>
  )
}

export default LogsList