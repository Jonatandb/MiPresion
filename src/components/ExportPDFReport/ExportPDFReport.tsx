import { useState } from "react"
import { usePDF } from "@react-pdf/renderer"
import PDFReport from "@/components/PDFReport/PDFReport"
import { useLogContext } from "@/hooks/useLogContext"

import styles from "./ExportPDFReport.module.css"
import { formatToShortDateWithoutTimeString } from "@/utils/formatDateUtils"

const Generator = ({ onDownloadClick }: { onDownloadClick?: () => void }) => {
  const { logs } = useLogContext()
  const [instance] = usePDF({ document: <PDFReport logs={logs} /> })

  if (instance.loading) return <div>Generando...</div>

  if (instance.error) {
    alert("Error al generar el PDF... Por favor, reintente")
    console.error(instance.error)
    return null
  }

  const fileName = `${formatToShortDateWithoutTimeString()}_Reporte_MiPresión.pdf`

  return (
    <a href={instance.url!} download={fileName} onClick={() => setTimeout(() => onDownloadClick!(), 10)}>
      Descargar
    </a>
  )
}

const ExportPDFReport = () => {
  const [shouldGenerate, setShouldGenerate] = useState(false)

  const renderGenerator = () => {
    return <Generator onDownloadClick={() => setShouldGenerate(false)} />
  }

  return (
    <div className={styles.exportPDFReportContainer}>
      {shouldGenerate ? renderGenerator() : <button onClick={() => setShouldGenerate(true)}>Generar PDF</button>}
    </div>
  )
}

export default ExportPDFReport