import { useEffect, useState } from "react"
import AddButtonIfLogs from "./components/AddButtonIfLogs/AddButtonIfLogs"
import AddEditLog from "./components/AddEditLog/AddEditLog"
import Header from "@/components/Header/Header"
import LogsList from "@/components/LogsList/LogsList"
import Modal from "@/components/Modal/Modal"
import NoLogsMessage from "./components/NoLogsMessage/NoLogsMessage"
import Settings from "./components/Settings/Settings"
import { useLogContext } from "./hooks/useLogContext"

const App = () => {
  const [showAddEditLog, setShowAddModal] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const { selectedLogId, setSelectedLogId } = useLogContext()

  useEffect(() => {
    if (selectedLogId) {
      setShowAddModal(true)
    }
  }, [selectedLogId])

  const handleAddButton = () => {
    setShowAddModal(true)
  }

  const handleCloseModalAddEditLog = () => {
    setShowAddModal(false)
    setSelectedLogId('')
  }

  const handleCloseModalSettings = () => {
    setShowSettings(false)
  }

  return (
    <>
      <Header onClickSettings={() => setShowSettings(true)} />

      <LogsList />

      <AddButtonIfLogs handleAddButtonClick={handleAddButton} />

      <NoLogsMessage onAddLog={handleAddButton} />

      <Modal onClose={handleCloseModalAddEditLog} isOpen={showAddEditLog}>
        <AddEditLog onClose={handleCloseModalAddEditLog} />
      </Modal>

      <Modal onClose={handleCloseModalSettings} isOpen={showSettings}>
        <Settings onClose={handleCloseModalSettings} />
      </Modal>
    </>
  )
}

export default App