import { useEffect } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import AddEditLog from "@/components/AddEditLog/AddEditLog"
import FloatingAddButton from "@/components/FloatingAddButton/FloatingAddButton"
import Header from "@/components/Header/Header"
import LogsList from "@/components/LogsList/LogsList"
import Modal from "@/components/Modal/Modal"
import NoLogsMessage from "@/components/NoLogsMessage/NoLogsMessage"
import Settings from "@/components/Settings/Settings"
import ContactFormWrapper from "@/components/Modals/ContactFormWrapper/ContactFormWrapper"
import BloodPressureLevelsWrapper from "@/components/Modals/BloodPressureLevelsWrapper/BloodPressureLevelsWrapper"
import ExportPDFReportWrapper from "@/components/Modals/ExportPDFReportWrapper/ExportPDFReportWrapper"
import { useLogContext } from "@/hooks/useLogContext"
import { trackPageView } from "@/utils/analytics"

const App = () => {
  const { selectedLogId, setSelectedLogId, logs } = useLogContext()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    if (selectedLogId) {
      navigate("/addedit")
    }
  }, [selectedLogId, navigate])

  const handleCloseModal = (to = "/") => {
    if (typeof to !== "string") {
      to = "/"
    }
    setSelectedLogId("")
    navigate(to)
  }

  return (
    <main>
      <Header />

      {logs.length > 0 ? (
        <>
          <LogsList />
          <FloatingAddButton onClick={() => navigate("/addedit")} />
        </>
      ) : (
        <NoLogsMessage onAddClicked={() => navigate("/addedit")} />
      )}

      <Routes>

        <Route path="/addedit" element={
          <Modal onClose={() => handleCloseModal()} isOpen={true}>
            <AddEditLog onClose={() => handleCloseModal()} />
          </Modal>
        } />

        <Route path="/settings" element={
          <Modal onClose={() => handleCloseModal()} isOpen={true}>
            <Settings onClose={() => handleCloseModal()} />
          </Modal>
        }>

          <Route path="exportpdf" element={
            <Modal onClose={() => handleCloseModal("/settings")} isOpen={true}>
              <ExportPDFReportWrapper onClose={() => handleCloseModal("/settings")} />
            </Modal>
          } />

          <Route path="bloodpressurelevels" element={
            <Modal onClose={() => handleCloseModal("/settings")} isOpen={true}>
              <BloodPressureLevelsWrapper onClose={() => handleCloseModal("/settings")} />
            </Modal>
          } />

          <Route path="contact" element={
            <Modal onClose={() => handleCloseModal("/settings")} isOpen={true}>
              <ContactFormWrapper onClose={() => handleCloseModal("/settings")} />
            </Modal>
          } />

        </Route>

      </Routes>
    </main>
  )
}

export default App