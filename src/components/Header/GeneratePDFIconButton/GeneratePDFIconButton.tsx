import { useNavigate } from "react-router-dom"
import PdfIcon from "@/assets/svg/pdf.svg?react"

import styles from "./GeneratePDFIconButton.module.css"

const GeneratePDFIconButton = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate("/settings/exportpdf")}
      aria-label={"Ícono de exportar a PDF"}
      role="button"
      className={styles.generatePDFIconButton}
    >
      <PdfIcon width="1.5rem" height="1.5rem" />
    </button>
  )
}

export default GeneratePDFIconButton