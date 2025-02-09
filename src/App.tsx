import { useEffect } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import AddEditLog from "@/components/AddEditLog/AddEditLog"
import FloatingButtons from "@/components/FloatingButtons/FloatingButtons"
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
import Help from "@/components/Help/Help"
import BloodPressureMeasurementGuideWrapper from "@/components/Modals/BloodPressureMeasurementGuideWrapper/BloodPressureMeasurementGuideWrapper"
import OutOfRangeValuesWrapper from "@/components/Modals/OutOfRangeValuesWrapper/OutOfRangeValuesWrapper"
import Shortcuts from "@/components/Shortcuts/Shortcuts"
import DataStorageWrapper from "@/components/Modals/DataStorageWrapper/DataStorageWrapper"
import ArrythmiaWrapper from "@/components/Modals/ArrythmiaWrapper/ArrythmiaWrapper"
import Seo from "@/components/SEO/SEO"

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

      <Seo />

      <Header />

      {logs.length > 0 ? (
        <>
          <LogsList />
          <FloatingButtons onClick={() => navigate("/addedit")} />
        </>
      ) : (
        <div style={{ marginTop: "2rem" }}>
          <NoLogsMessage onAddClicked={() => navigate("/addedit")} />
          <Shortcuts />
        </div>
      )}


      <Routes>

        <Route path="/addedit" element={
          <Modal onClose={() => handleCloseModal()} isOpen={true}>
            <AddEditLog onClose={() => handleCloseModal()} />
          </Modal>
        } />

        <Route path="/help" element={
          <Modal onClose={() => handleCloseModal()} isOpen={true}>
            <Help onClose={() => handleCloseModal()} />
          </Modal>
        }>

          <Route path="measurementguide" element={
            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
              <BloodPressureMeasurementGuideWrapper onClose={() => handleCloseModal("/help")} />
            </Modal>
          } />

          <Route path="outofrangevalues" element={
            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
              <OutOfRangeValuesWrapper onClose={() => handleCloseModal("/help")} />
            </Modal>
          } />

          <Route path="arrythmia" element={
            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
              <ArrythmiaWrapper onClose={() => handleCloseModal("/help")} />
            </Modal>
          } />

          <Route path="bloodpressurelevels" element={
            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
              <BloodPressureLevelsWrapper onClose={() => handleCloseModal("/help")} />
            </Modal>
          } />

          <Route path="storage" element={
            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
              <DataStorageWrapper onClose={() => handleCloseModal("/help")} />
            </Modal>
          } />

        </Route>

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