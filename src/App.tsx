import { useEffect, useState } from "react"
import AddButton from "@/components/AddButton/AddButton"
import AddEditLog from "./components/AddEditLog/AddEditLog"
import Header from "@/components/Header/Header"
import LogsList from "@/components/LogsList/LogsList"
import Modal from "@/components/Modal/Modal"
import { useLogContext } from "./hooks/useLogContext"

const App = () => {
  const [showAddEditLog, setShowAddModal] = useState(false)
  const { selectedLogId, setSelectedLogId } = useLogContext()

  useEffect(() => {
    if (selectedLogId) {
      setShowAddModal(true)
    }
  }, [selectedLogId])

  const handleAddButton = () => {
    setShowAddModal(true)
  }

  const handleModelClose = () => {
    setShowAddModal(false)
    setSelectedLogId('')
  }

  return (
    <>
      <Header />
      <LogsList />
      <AddButton onClick={handleAddButton} />
      <Modal onClose={handleModelClose} isOpen={showAddEditLog}>
        <AddEditLog onClose={handleModelClose} />
      </Modal>
    </>
  )
}

export default App