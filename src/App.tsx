import { useEffect, useState } from "react"
import AddEditLog from "./components/AddEditLog/AddEditLog"
import FloatingAddButton from "./components/FloatingAddButton/FloatingAddButton"
import Header from "@/components/Header/Header"
import LogsList from "@/components/LogsList/LogsList"
import Modal from "@/components/Modal/Modal"
import NoLogsMessage from "./components/NoLogsMessage/NoLogsMessage"
import Settings from "./components/Settings/Settings"
import { useLogContext } from "./hooks/useLogContext"

const App = () => {
  const [modalType, setModalType] = useState<"addEditLog" | "settings">()
  const { selectedLogId, setSelectedLogId, logs } = useLogContext()

  useEffect(() => {
    if (selectedLogId) {
      setModalType("addEditLog")
    }
  }, [selectedLogId])

  const handleCloseModal = () => {
    setModalType(undefined)
    setSelectedLogId("")
  }

  return (
    <>
      <Header onSettingsClicked={() => setModalType("settings")} />

      {logs.length > 0 ?
        (<>
          <LogsList />
          <FloatingAddButton onClick={() => setModalType("addEditLog")} />
        </>)
        :
        <NoLogsMessage onAddClicked={() => setModalType("addEditLog")} />
      }

      {modalType && (
        <Modal onClose={handleCloseModal} isOpen={true}>
          {modalType === "addEditLog" && <AddEditLog onClose={handleCloseModal} />}
          {modalType === "settings" && <Settings onClose={handleCloseModal} />}
        </Modal>
      )}
    </>
  )
}

export default App