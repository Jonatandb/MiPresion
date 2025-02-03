import { useLogContext } from "@/hooks/useLogContext"
import generateLinkOrSpan from "@/utils/generateLinkOrSpan"

import styles from "./News.module.css"


const News = () => {
  const { logs } = useLogContext()

  return (
    <div className={styles.newsContainer}>
      <h3 className={styles.title}>¿Que hay de nuevo?</h3>

      <ul>

        <li className={styles.newVersion}>
          <strong>v.3.4.1</strong>
          <ul>
            <li>Se agregó columna "Arritmia" al reporte PDF.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.3.4.0</strong>
          <ul>
            <li>Se agregó ícono en la cabecera que lleva a la pantalla de {generateLinkOrSpan("/settings/exportpdf", "generación de reportes PDF", logs.length > 0)}.</li>
            <li>Se mejoró el diseño de la pantalla de {generateLinkOrSpan("/settings/exportpdf", "generación de reportes PDF", logs.length > 0)}.</li>
            <li>Se actualizaron los accesos de la pantalla de inicio:
              <ul>
                <li>Se agregó acceso a la sección en la ayuda que explica {generateLinkOrSpan("/help/arrythmia", "que es Arritmia (latido irregular)")}.</li>
                <li>Se agregó acceso directo para cambiar entre tema claro/oscuro.</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.3.3.2</strong>
          <ul>
            <li>Se agregó sección en la ayuda que explica {generateLinkOrSpan("/help/arrythmia", "que es Arritmia (latido irregular)")}.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.3.3.0</strong>
          <ul>
            <li>Se agregó funcionalidad que permite {generateLinkOrSpan("/addedit", "registrar arritmia en las mediciones")}.</li>
            <li>Se hicieron ajustes generales que permiten que cuando se agrande el tamaño del texto todo se vea correctamente.</li>
            <li>Se hicieron ajustes generales que permiten que en pantallas grandes se pueda hacer zoom.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.3.2.0</strong>
          <ul>
            <li>El {generateLinkOrSpan("/settings/exportpdf", "reporte PDF", logs.length > 0)} ahora incluye los valores promedio (sistólica, diastólica, pulso) del rango de fechas seleccionado.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.3.0.0</strong>
          <ul>
            <li><strong>Nueva funcionalidad</strong>: Selección de rango de fechas durante la {generateLinkOrSpan("/settings/exportpdf", "generación de reportes PDF", logs.length > 0)}.</li>
            <li>Mejoras en la consistencia visual general de la aplicación.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.2.2.0</strong>
          <ul>
            <li><strong>Nuevos componentes</strong>:
              <ul>
                <li><strong>Shortcuts</strong>: Accesos rápidos para mejorar la usabilidad de los nuevos usuarios.</li>
                <li><strong>DataStorage</strong>: Sección de la ayuda que explica {generateLinkOrSpan("/help/storage", "dónde se almacenan los datos")}.</li>
              </ul>
            </li>
            <li>Validación de entrada para restablecer valores de presión arterial inválidos.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.2.1.1</strong>
          <ul>
            <li><strong>Nueva funcionalidad</strong>: Detección de mediciones fuera de rango con icono de advertencia y mensaje de alerta al guardar.</li>
            <li>Mejoras en los estilos de los componentes {generateLinkOrSpan("/settings", "SocialMedia y Donate")}.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.1.3.0</strong>
          <ul>
            <li><strong>Nueva funcionalidad</strong>: {generateLinkOrSpan("/settings/exportpdf", "Exportación de datos a PDF", logs.length > 0)}.</li>
            <li>Mejoras en la optimización de imágenes y favicons.</li>
          </ul>
        </li>

        <li className={styles.newVersion}>
          <strong>v.1.1.1</strong>
          <ul>
            <li><strong>Nuevos componentes</strong>:
              <ul>
                <li><strong>About</strong>: Información sobre la aplicación (luego renombrado a <strong>Help</strong>).</li>
                <li><strong>ContactForm</strong>: {generateLinkOrSpan("/settings/contact", "Formulario de contacto")} para feedback.</li>
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