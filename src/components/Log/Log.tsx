import { LogData } from "@/components/AddEditLog/AddEditLog";

import { useThemeContext } from "@/hooks/useTheme";
import { useLogContext } from "@/hooks/useLogContext";
import { categoryType, getCategoryString } from "@/utils/getCategoryString";

import pencilEmptyWhite from "@/assets/pencil_white.png";
import pencilFull from "@/assets/pencil.png";
import pencilBlack from "@/assets/pencil_black.png";
import pillEmptyWhite from "@/assets/pill_white.png";
import pillFull from "@/assets/pill.png";
import pillBlack from "@/assets/pill_black.png";

import styles from "./Log.module.css"


const styleByCategory = {
  [categoryType.NORMAL]: styles["levelNormal"],
  [categoryType.NORMAL_ELEVADA]: styles["levelElevated"],
  [categoryType.NIVEL_1]: styles["levelStage1"],
  [categoryType.NIVEL_2]: styles["levelStage2"],
  [categoryType.NIVEL_3]: styles["levelStage3"],
  [categoryType.SISTOLICA_AISLADA]: styles["levelAisolated"],
  [categoryType.DATOS_INCORRECTOS]: styles["levelError"]
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

  const category = getCategoryString(systolic, diastolic)

  return (
    <article className={styles.logContainer} onClick={() => setSelectedLogId(id)}>
      <section className={styles.row}>
        <span className={`${styles.level} ${styleByCategory[category]}`} title="Categoría">
          {category}
        </span>
        <span className={styles.date} title={date}>⏱ {date}</span>
      </section>
      <section className={styles.row}>
        <div className={styles.mmhgContainer}>
          <span className={styles.mmhg} title="Presión sistólica">{systolic}</span>
          <span className={styles.mmhg}>/</span>
          <span className={styles.mmhg} title="Presión diastólica">{diastolic}</span>
          {" "}
          <span className={styles.leyend} title="Milímetros de mercurio">mm Hg</span>
        </div>
        <div className={styles.bpmContainer}>
          <div className={styles.iconsContainer}>
            {
              medicine ?
                <img className={styles.icon} width="19" height="19" src={pillFull} alt="Ícono píldora tomada" />
                :
                <img className={styles.icon} width="19" height="19" src={imageByTheme[theme]["pill"]} alt="Ícono píldora no tomada" />
            }
            {
              notes ?
                <img className={styles.icon} width="19" height="19" src={pencilFull} alt="Ícono hay notas" title={notes} />
                :
                <img className={styles.icon} width="19" height="19" src={imageByTheme[theme]["pencil"]} alt="Ícono no hay notas" />
            }
          </div>
          <span className={styles.bpm} title="Pulso">{pulse} <span className={styles.leyend}>BPM</span></span>
        </div>
      </section>
    </article>
  )
}

export default Log