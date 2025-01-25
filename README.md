# ![](./src/assets/favicon_white.png) Registro de presión sanguínea

---

## 👩🏻‍💻 Tecnologías usadas

- React, Vite, TypeScript, CSS Modules

---

## 💅🏻 Funcionalidad

<p align="center">
    <a href="https://jonatandb.dev.ar/MiPresion/">
        <img src="./MiPresion_tour.gif" alt="MiPresión - Registros de presión sanguínea por Jonatandb"/>
    </a>
</p>

---

## 🚀 Sitio Web

[https://jonatandb.dev.ar/MiPresion/](https://jonatandb.dev.ar/MiPresion/)

---

## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/Jonatandb/MiPresion
```

Ir al directorio del proyecto

```bash
  cd MiPresion
```

Instalar dependencias

```bash
  pnpm install
```

Iniciar el servidor

```bash
  pnpm run dev
```

Visitar:

- http://localhost:5173

---

## Generación de versión productiva para Github Pages

```bash
  npm run build
```

O bien `build-dev` (Establece VITE_ANALYTICS_ENABLED=false), para verificar el build:

```bash
  npm run build-dev
```

---

# 🧭 Roadmap

## 🏁 Posibles agregados:

- [ ] Agregar opción para cambiar de idioma entre inglés y español

- [ ] Agregar calendario

- [ ] Agregar tablero con estadísticas

- [ ] Agregar posibilidad de modificar valores de los niveles

- [ ] Que desde Ajustes se pueda especificar el país de origen y la tabla de niveles se muestre de acuerdo a dicho país, también los niveles mostrados en los registros.

## 📝 Pendientes:

- Errores:

  - [ ] 🐛 Verificar por qué cuando clickeo los botones de cancelar y actualizar en el modal de agregar, el click parece que se "va al fondo" y se selecciona el 2do registro de la lista...(o algo similar)

- Refactors:

  - [ ] Corregir/agregar tabindex para navegación por teclado
  - [ ] Crear "AddEditLogModal" y extraer contenido actual (sin el container y el header) a un componente "AddEditLogForm"
  - [ ] Hacer que cada sección (modal) tenga su propia url
  - [ ] Crear un contexto para guardar todos los ajustes (país, formato de fecha, dark mode, valores de la tabla de niveles, etc)

- Ajustes:

  - [ ] Agregar opción "Ayuda y Preguntas frecuentes"
    - Ítems: "¿Cómo me tomo la presión?", "¿Que significa "Niveles fuera de rango"?", "¿Dónde se guardan mis datos?" -> Navegador (Actualizar al agregar funcionalidad exportar/importar)
  - [ ] Reemplazar subtítulo "SOBRE MÍ" por "CONTACTO"
    - [ ] Reemplazar "Contacto & Errores" por "¿Errores? ¿Sugerencias?"
  - [ ] Agregar opción de "Modo Daltónico"
  - [ ] Reemplazar "Activar Tema Oscuro" que cambia a "Activar Tema Claro" con un switch
  - [ ] Agregar "Medicina Tomada" con un switch
  - [ ] Agregar "Niveles de presión" con un switch
  - [ ] Agregar "Notas" con un switch
  - [ ] Exportar a PDF:
    - [ ] Agregar opción de exportar por rango de fechas
    - [ ] Agregar al reporte el promedio de presión máxima, mínima y pulsaciones por minuto
  - [ ] Agregar opción "Exportar/Importar todos los datos" (En formato json), para descargar e importar desde otro navegador (Ideal que los ajustes estén en un contexto)

- Home:

  - [ ] Reemplazar "Aún no se agregaron registros" con "Aún no hay mediciones"
  - [ ] Reemplazar "Nuevo registro" con "Agregar una medición"
  - [ ] Ampliar area de clickeo del "buttonContainer" para incluír el botón y el "Agregar una medición"
  - [ ] Agregar debajo de "Agregar una medición", botones de "Ayuda y Preguntas frecuentes", "¿Cómo me tomo la presión?", "¿Errores? ¿Sugerencias?" (y otras opciones útiles)
    - LogsList -> Log
      - [ ] Reemplazar "Datos incorrectos" por "Valores fuera de rango" y un ícono de advertencia ⚠
  - [ ] Agrupar listado por fecha
  - [ ] Agregar opción de filtrado por rango de fechas
  - [ ] Posibilidad de registar:
    - Arritmia (Latido irregular) 🖤/❤ (Checkbox)
    - Posición del cuerpo (Menú desplegable: Sentado, Parado, Acostado)
    - Ubicación del medidor (Menú desplegable: brazo izquierdo, brazo derecho, muñeca izquierda, muñeca derecha)

- Agregar registro:

  - [ ] Reemplazar "Agregar Registro" por "Agregar Medición"
  - [ ] Cuando se quita el foco de "Sistólica" y/o "Diastólica", validar (si hay datos en ambos campos) y mostrar una leyenda con "Valores fuera de rango (¿Qué significa?)" (clickeable) que muestre el modal de "Ayuda y Preguntas frecuentes" (e incluye la sección "¿Que significa "Valores fuera de rango"?")

- Contacto:

  - [ ] Reemplazar el placeholder "Hola Jonatandb! te escribo para decirte..." por "Hola, me gustaría comentar que..."

  - [ ] Agregar sección “Otros de mis proyectos”, con 🔑LoginsAdmin y 💸MisDeudas (próximamente), clickeables (con su propia URL), con info de los proyectos.

## 👷🏻‍♂️ Trabajando:

- [ ] Usar date-fns en todos lugar que muestre una fecha

## ✅ Completado:

- [x] Corregir/evitar que al abrir los modales se re-descargue el logo

- [x] Hacer sección "Exportar a PDF"

- [x] Quitar emojis junto al título de donaciones

- [x] 🐛 Solucionar que al hacer click al lado del botón + flotante, en se abre el modal de Agregar registro

- [x] Que el texto del botón Agregar/Actualizar sea negro (en dark mode: blanco)

- [x] 🐛 Corregir ordenamiento de los logs (Causa: las fechas no tienen los segundos!!)

- [x] Agregar el logo y nombre de la app al modal de Ajustes y agregar el número de versión

- [x] Crear "BloodPressureLevelsModal.tsx" (y llamarlo desde Settings), meter dentro el contenido de "BloodPressureLevels" (sin el container y el header) para poder luego meter "BloodPressureLevels" debajo del textarea de notas en AddEditLog

- [x] Hacer formulario de contacto con envío de mails utilizando EmailJS

- [x] Optimización de imágenes y creación de archivos "fuente" PSD

- [x] Agregar color de fondo al hover sobre los medios de contacto en About

- [x] Agregar screenshots

- [x] Poner nombre: MiPresión (Actualizar header)

- [x] Agregar posibilidad de borrar todos los registros

- [x] Hacer sección "Errores y Contacto" con opciones de donación

- [x] Corregir estilo de íconos en Settings para que tengan el mismo ancho

- [x] Implementar CSS Modules en Log y Header, ToggleTheme, SettingIcon, Logo

- [x] Usar variables CSS en todos los CSS

- [x] Reemplazar px por rem en todos los CSS

- [x] Corregir colores de dark mode

- [x] Implementar CSS Modules en Log y Header, ToggleTheme, SettingIcon, Logo

- [x] Actualizar imports relativos con imports de ruta con @ en Settings

- [x] Hacer refactor para mejorar código en App.tsx con respecto a lógica de modales

- [x] Hacer mensaje para cuando no se crearon registros

  - [x] Eliminar mock data y su dependencia

- [x] Hacer versión responsive

- [x] Hacer sección "Ajustes"

- [x] Corregir problema con el botón de agregar, que en cualquier otra resolución se va muy a la derecha y abajo

- [x] Hacer sección "Niveles de presión arterial"

- [x] Corregir problema con scroll luego de agregar o editar un registro, la lista de logs queda scrolleada

- [x] Corregir hora por defecto al crear un log, aparece desfazada 3 horas por lo menos

- [x] Hacer sección "Agregar"

- [x] Hacer sección "Editar"

- [x] Agregar configuración para importaciones absolutas "@/components/myComponent"

- [x] Íconos de píldora y lápiz con bordes negros para el tema light

- [x] Contexto para el tema

- [x] Div que envuelva a los íconos de píldora y lápiz, junto con los datos del pulso, para que los íconos queden siempre pegados a la derecha

- [x] Guardado de datos en localStorage

- [x] Usar Vite: npm create vite

## 🛠 Herramientas y recursos utilizados:

- [EmailJS](https://emailjs.com)
- [Conversor de PX a REM](https://nekocalc.com/es/px-a-rem-conversor)
- [Photopea](https://www.photopea.com/)
- [Flaticon](https://www.flaticon.com/)

---

## Autor

- Jonatandb - [@jonatandb](https://www.github.com/jonatandb)

