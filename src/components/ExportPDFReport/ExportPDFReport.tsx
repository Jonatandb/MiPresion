import { useState, useEffect } from "react"
import { usePDF } from "@react-pdf/renderer"
import PDFReport from "@/components/PDFReport/PDFReport"
import { useLogContext } from "@/hooks/useLogContext"
import { formatToShortDateWithoutTimeString } from "@/utils/formatDateUtils"
import { trackEvent } from "@/utils/analytics"

import styles from "./ExportPDFReport.module.css"

const Generator = ({ onDownloadClick }: { onDownloadClick?: () => void }) => {
  const { logs } = useLogContext()
  const [instance] = usePDF({ document: <PDFReport logs={logs} /> })
  const [buttonText, setButtonText] = useState("Listo! 😎🤙🏻")

  useEffect(() => {
    if (!instance.error && !instance.loading && instance.url) {
      setTimeout(() => setButtonText("Descargar"), 1500)
    }
  }, [instance])

  if (instance.loading) return <div>Generando...</div>

  if (instance.error) {
    alert("Error al generar el PDF... Por favor, reintente")
    console.error(instance.error)
    return null
  }

  const fileName = `${formatToShortDateWithoutTimeString()}_Reporte_MiPresión.pdf`

  return (
    <a href={instance.url!} download={fileName} onClick={() => setTimeout(() => onDownloadClick!(), 10)}>
      {buttonText}
    </a>
  )
}

const ExportPDFReport = () => {
  const [shouldGenerate, setShouldGenerate] = useState(false)
  const handleClick = () => {
    setShouldGenerate(true)
    trackEvent("Interaction", "ButtonClicked", "ExportPDFReport -> GeneratePDF")
  }

  const renderGenerator = () => {
    return <Generator onDownloadClick={() => setShouldGenerate(false)} />
  }

  return (
    <div className={styles.exportPDFReportContainer}>
      {shouldGenerate ? renderGenerator() : <button onClick={handleClick}>Generar PDF</button>}
    </div>
  )
}

export default ExportPDFReport