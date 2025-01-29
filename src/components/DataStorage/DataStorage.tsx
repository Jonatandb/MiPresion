import styles from "./DataStorage.module.css"

const DataStorage = () => {
  return (
    <div className={styles.dataStorageContainer}>

      <h2 className={styles.title}>¿Dónde se guardan mis datos?</h2>

      <p>Los datos que ingresaste quedan guardados localmente <strong>en tu navegador</strong>. Esto significa que solo vos podés acceder a ellos desde este dispositivo. <strong>Es importante que sepas</strong>:</p>

      <ul>
        <li>Si borrás los datos de navegación, las mediciones <strong>se van a perder</strong>.</li>
        <li>Si cambiás de navegador, <strong>no vas a encontrar tus datos</strong> en el nuevo.</li>
        <li>En modo incógnito los datos <strong>se borran</strong> al cerrar la ventana.</li>
      </ul>

      <p>¡Dato importante! Los datos están seguros en tu dispositivo - no se guardan en ningún servidor ni se comparten con nadie.</p>

      <p>Si volvés a ingresar desde el mismo navegador y dispositivo, ahí seguirán mientras no los elimines.</p>

      <p>Cuidalos como propios, porque lo son. 😊</p>

    </div>
  )
}

export default DataStorage