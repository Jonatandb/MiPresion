import { useState } from "react"
import AddButton from "@/components/AddButton/AddButton"
import AddEditLog from "./components/AddEditLog/AddEditLog"
import Header from "@/components/Header/Header"
import LogsList from "@/components/LogsList/LogsList"
import Modal from "@/components/Modal/Modal"

const App = () => {
  const [showAddEditLog, setShowAddModal] = useState(false)

  const handleAddButton = () => {
    setShowAddModal(true)
  }

  // const testState: LogData = {
  //   id: '3',
  //   systolic: '3',
  //   diastolic: '3',
  //   pulse: '3',
  //   medicine: true,
  //   notes: '3',
  //   date: '2025-03-03T03:03'
  // }

  return (
    <>
      <Header />
      <LogsList />
      <AddButton onClick={handleAddButton} />
      {
        showAddEditLog && (
          <Modal onClose={() => setShowAddModal(false)}>
            <AddEditLog onClose={() => setShowAddModal(false)} /*state={testState}*/ />
          </Modal>
        )
      }
    </>
  )
}

export default App