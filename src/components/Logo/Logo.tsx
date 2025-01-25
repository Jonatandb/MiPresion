
import React, { useEffect } from "react"
import favicon60 from "@/assets/favicon_60x60.png"
import favicon120 from "@/assets/favicon_120x120.png"

import styles from "./Logo.module.css"

const Logo = React.memo(() => {
  useEffect(() => {
    const images = [favicon60, favicon120];
    images.forEach((image) => {
      new Image().src = image;
    });
  }, [])

  return (
    <div className={`${styles.titleContainer}`}>
      <img className={`${styles.logo}`}
        src={favicon60}
        srcSet={`${favicon60} 60w, ${favicon120} 120w`}
        sizes="(max-width: 600px) 30px, (max-width: 1200px) 60px, 120px"
        alt="Logo de MiPresión - Registro de Presión Sanguínea por Jonatandb"
        title='MiPresión - Registro de Presión Sanguínea por Jonatandb'
        height={30}
        width={30} />
      <div className={`${styles.appTitle}`}>
        <h1>
          MiPresión <span>v.1.3.6</span>
        </h1>
        <span>
          Registro de presión sanguínea
        </span>
      </div>
    </div>
  )
})

export default Logo