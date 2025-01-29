import { useState, useEffect } from "react"
import { addDays, subSeconds } from "date-fns"
import { usePDF } from "@react-pdf/renderer"
import PDFReport from "@/components/PDFReport/PDFReport"
import { useLogContext } from "@/hooks/useLogContext"
import { trackEvent } from "@/utils/analytics"
import { filterLogsByDateRange } from "@/utils/filterLogsByDateRange"

import styles from "./ExportPDFReport.module.css"


const Generator = ({ from, to, onDownloadClick }: { from: string, to: string, onDownloadClick?: () => void }) => {
  const { logs } = useLogContext()
  const updatedTo = subSeconds(addDays(new Date(to), 1), 1).toISOString()
  const [instance] = usePDF({ document: <PDFReport logs={filterLogsByDateRange(from, updatedTo, logs)} /> })
  const [buttonText, setButtonText] = useState("Listo! 😎🤙🏻")

  useEffect(() => {
    if (!instance.error && !instance.loading && instance.url) {
      setTimeout(() => setButtonText("Descargar PDF"), 1500)
    }
  }, [instance])

  if (instance.loading) return <div>Generando...</div>

  if (instance.error) {
    alert("Error al generar el PDF... Por favor, reintente")
    console.error(instance.error)
    return null
  }

  const fileName = `${from}_${to}_Reporte_MiPresión.pdf`

  return (
    <a href={instance.url!} download={fileName} onClick={() => setTimeout(() => onDownloadClick!(), 10)}>
      {buttonText}
    </a>
  )
}

const ExportPDFReport = ({ from, to }: { from: string, to: string }) => {
  const [shouldGenerate, setShouldGenerate] = useState(false)
  const handleClick = () => {
    setShouldGenerate(true)
    trackEvent("ButtonClicked_GeneratePDF_ExportPDFReport")
  }

  const renderGenerator = () => {
    return <Generator from={from} to={to} onDownloadClick={() => setShouldGenerate(false)} />
  }

  return (
    <div className={styles.exportPDFReportContainer}>
      {shouldGenerate ? renderGenerator() : <button onClick={handleClick}>Generar PDF</button>}
    </div>
  )
}

export default ExportPDFReport