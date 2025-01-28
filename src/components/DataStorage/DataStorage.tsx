import styles from "./DataStorage.module.css"

const DataStorage = () => {
  return (
    <div className={styles.dataStorageContainer}>

      <h2 className={styles.title}>¿Dónde se guardan mis datos?</h2>

      <p>Los datos que ingresaste quedan guardados localmente en tu navegador. Esto significa que solo vos podés acceder a ellos desde este dispositivo. Es importante que sepas:</p>

      <ul>
        <li>Si borrás los datos de navegación, las mediciones se van a perder.</li>
        <li>Si cambiás de navegador, no vas a encontrar tus datos en el nuevo.</li>
        <li>En modo incógnito los datos se borran al cerrar la ventana.</li>
      </ul>

      <p>¡Dato importante! Los datos están seguros en tu dispositivo - no se guardan en ningún servidor ni se comparten con nadie.</p>

      <p>Si volvés a ingresar desde el mismo navegador y dispositivo, ahí seguirán mientras no los elimines.</p>

      <p>Cuidalos como propios, porque lo son. 😊</p>

    </div>
  )
}

export default DataStorage