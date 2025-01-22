import styles from './BloodPressureLevels.module.css'

const BloodPressureLevels = () => {
  return (
    <div className={styles.bloodPressureLevelsContainer}>
      <h2 className={styles.title}>Niveles de Presión Sanguínea</h2>
      <div className={styles.columnHeaders}>
        <span>Nivel</span>
        <span>Sistólica</span>
        <span>Diastólica</span>
      </div>
      <div className={`${styles.row} ${styles.rowTop} ${styles.levelNormal}`}>
        <span>Normal</span><span>&lt; 130</span><span>&lt; 85</span>
      </div>
      <div className={`${styles.row} ${styles.levelElevated}`}>
        <span>Elevada</span><span>130 - 139</span><span>85 - 89</span>
      </div>
      <div className={`${styles.row} ${styles.levelStage1}`}>
        <span>Nivel 1</span><span>140 - 159</span><span>90 - 99</span>
      </div>
      <div className={`${styles.row} ${styles.levelStage2}`}>
        <span>Nivel 2</span><span>160 - 179</span><span>100 - 109</span>
      </div>
      <div className={`${styles.row} ${styles.levelStage3}`}>
        <span>Nivel 3</span><span>&gt; 180</span><span>&gt; 110</span>
      </div>
      <div className={`${styles.row} ${styles.rowBottom} ${styles.levelAisolated}`}>
        <span>Sistólica Aislada</span><span>&gt; 140</span><span>&lt; 90</span>
      </div>
      <div className={`${styles.source}`}>
        <span>Fuente:&nbsp;</span>
        <a
          href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/75000-79999/76388/norma.htm"
          target="_blank"
          rel="noopener noreferrer">
          2002 Ministerio de Salud
        </a>
      </div>
      <div className={`${styles.disclaimer}`}>
        <span>La clasificación puede variar dependiendo de la edad, género, país, etc. Siempre consulte a un profesional de la salud para saber más.</span>
      </div>
    </div>
  )
}

export default BloodPressureLevels