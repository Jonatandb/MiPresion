import { useEffect, useState } from "react"
import AddButton from "@/components/AddButton/AddButton"
import AddEditLog from "./components/AddEditLog/AddEditLog"
import Header from "@/components/Header/Header"
import LogsList from "@/components/LogsList/LogsList"
import Modal from "@/components/Modal/Modal"
import { useLogContext } from "./hooks/useLogContext"
import Settings from "./components/Settings/Settings"

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

      <AddButton onClick={handleAddButton} />

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