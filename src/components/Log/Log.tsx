import { LogData } from "@/components/AddEditLog/AddEditLog";

import { useThemeContext } from '@/hooks/useTheme';

import pencilEmptyWhite from '@/assets/pencil_white.png';
import pencilFull from '@/assets/pencil.png';
import pencilBlack from '@/assets/pencil_black.png';

import pillEmptyWhite from '@/assets/pill_white.png';
import pillFull from '@/assets/pill.png';
import pillBlack from '@/assets/pill_black.png';

import './styles.css'
import { useLogContext } from "@/hooks/useLogContext";

const getCategoryInfo = (systolic: number | string, diastolic: number | string) => {
  const categoryData = {
    style: "levelAisolated",
    category: "DATOS INCORRECTOS"
  }

  if (typeof systolic !== "number") {
    systolic = Number(systolic)
  }

  if (typeof diastolic !== "number") {
    diastolic = Number(diastolic)
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

interface imageByThemeType {
  light: {
    pill: string,
    pencil: string,
  },
  dark: {
    pill: string,
    pencil: string,
  },
}

const imageByTheme: imageByThemeType = {
  light: {
    pill: pillBlack,
    pencil: pencilBlack,
  },
  dark: {
    pill: pillEmptyWhite,
    pencil: pencilEmptyWhite,
  },
};

const Log = ({ id, date, systolic, diastolic, pulse, medicine, notes }: LogData) => {
  const { theme } = useThemeContext()
  const { setSelectedLogId } = useLogContext()

  return (
    <article id='logContainer' onClick={() => setSelectedLogId(id)}>
      <section className="row">
        <span className={`level ${getCategoryInfo(systolic, diastolic).style}`} title="Categoría" >{`${getCategoryInfo(systolic, diastolic).category}`}</span>
        <span className="date" title={date}>{date}</span>
      </section>
      <section className="row">
        <div id="mmhgContainer">
          <span className="mmhg" title="Presión sistólica">{systolic}</span>
          <span className="mmhg">/</span>
          <span className="mmhg" title="Presión diastólica">{diastolic}</span>
          {` `}
          <span className="leyend" title="Milímetros de mercurio">mmhg</span>
        </div>
        <div id="bpmContainer">
          <div id="iconsContainer">
            {
              medicine ?
                <img className="icon" width="1.2rem" src={pillFull} alt="Ícono píldora tomada" />
                :
                <img className="icon" width="1.2rem" src={imageByTheme[theme]['pill']} alt="Ícono píldora no tomada" />
            }
            {
              notes ?
                <img className="icon" width="1.2rem" src={pencilFull} alt="Ícono hay notas" title={notes} />
                :
                <img className="icon" width="1.2rem" src={imageByTheme[theme]['pencil']} alt="Ícono no hay notas" />
            }
          </div>
          <span className="bpm" title="Pulso">{pulse} <span className="leyend">BPM</span></span>
        </div>
      </section>
    </article>
  )
}

export default Log