import './styles.css'

const getCategoryInfo = (systolic: number, diastolic: number) => {
  const categoryData = {
    style: "levelAisolated",
    category: "DATOS INCORRECTOS"
  }

  if (systolic < 130 && diastolic < 85) {
    categoryData.category = "Normal"
    categoryData.style = "levelNormal"
  } else if ((systolic >= 130 && systolic <= 139) && (diastolic >= 85 && diastolic <= 89)) {
    categoryData.category = "Normal Elevada"
    categoryData.style = "levelElevated"
  } else if ((systolic >= 140 && systolic <= 159) && (diastolic >= 90 && diastolic <= 99)) {
    categoryData.category = "Nivel 1"
    categoryData.style = "levelStage1"
  } else if ((systolic >= 160 && systolic <= 179) && (diastolic >= 100 && diastolic <= 109)) {
    categoryData.category = "Nivel 2"
    categoryData.style = "levelStage2"
  } else if (systolic >= 180 && diastolic >= 110) {
    categoryData.category = "Nivel 3"
    categoryData.style = "levelStage3"
  } else if (systolic >= 140 && diastolic < 90) {
    categoryData.category = "Sistólica Aislada"
    categoryData.style = "levelAisolated"
  }

  return categoryData
}

import { LogData } from '../LogsList/LogsList'
interface LogProps extends Omit<LogData, 'id'> { }

const Log = ({ date, systolic, diastolic, pulse }: LogProps) => {
  return (
    <>
      {
        <article>
          <div className="row">
            <span id="level" title="Categoría" className={`${getCategoryInfo(systolic, diastolic).style}`}>{`${getCategoryInfo(systolic, diastolic).category}`}</span>
            <span id="date" title={date}>{date}</span>
          </div>
          <div className="row">
            <div>
              <span id="mmhg" title="Presión sistólica">{systolic}</span>
              <span id="mmhg">/</span>
              <span id="mmhg" title="Presión diastólica">{diastolic}</span>
              {` `}
              <span id="leyend" title="Milímetros de mercurio">mmhg</span>
            </div>
            <span id="pulse" title="Pulso">{pulse} <span id="leyend">BPM</span></span>
          </div>
        </article>
      }
    </>
  )
}

export default Log