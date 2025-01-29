import styles from "./News.module.css"

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <h3 className={styles.title}>¿Que hay de nuevo?</h3>


      <ul>
        <li className={styles.newVersion}>
          <strong>v.3.0.0</strong>
          <ul>
            <li><strong>Nueva funcionalidad</strong>: Generación de informes (PDF) por rango de fechas.</li>
            <li>Mejoras en la consistencia visual general de la aplicación.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.2.2.0</strong>
          <ul>
            <li><strong>Nuevos componentes</strong>:
              <ul>
                <li><strong>Shortcuts</strong>: Accesos rápidos para mejorar la usabilidad.</li>
                <li><strong>DataStorage</strong>: Sección de la ayuda que explica dónde se almacenan los datos.</li>
              </ul>
            </li>
            <li>Validación de entrada para restablecer valores de presión arterial inválidos.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.2.1.1</strong>
          <ul>
            <li><strong>Nueva funcionalidad</strong>: Detección de mediciones fuera de rango con icono de advertencia y mensajes de alerta.</li>
            <li>Mejoras en los estilos de los componentes <strong>SocialMedia</strong> y <strong>Donate</strong>.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.1.3.0</strong>
          <ul>
            <li><strong>Nueva funcionalidad</strong>: Exportación de datos a PDF.</li>
            <li>Mejoras en la optimización de imágenes y favicons.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.1.1.1</strong>
          <ul>
            <li><strong>Nuevos componentes</strong>:
              <ul>
                <li><strong>About</strong>: Información sobre la aplicación (luego renombrado a <strong>Help</strong>).</li>
                <li><strong>ContactForm</strong>: Formulario de contacto para feedback.</li>
              </ul>
            </li>
            <li>Mejoras en la organización del código y optimizaciones sugeridas por <strong>Lighthouse</strong> para SEO y un rendimiento mejorado.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.1.0.0</strong>
          <ul>
            <li><strong>Lanzamiento inicial</strong>:
              <ul>
                <li>Componentes básicos: <strong>Header</strong>, <strong>Log</strong>, <strong>LogsList</strong>, <strong>AddButton</strong>.</li>
                <li>Soporte para modo oscuro y temas personalizados.</li>
                <li>Uso de <strong>TypeScript</strong> para tipado seguro.</li>
                <li>Estructura inicial del proyecto con <strong>Vite</strong> y <strong>React</strong>.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>


    </div>
  )
}

export default News