import { useEffect } from "react"
import { useThemeContext } from "@/hooks/useTheme"
import { copyToClipboard } from "@/utils/copyToClipboard"
import { trackEvent } from "@/utils/analytics"

import usdt from "@/assets/usdt.png"
import kofi from "@/assets/ko-fi.png"
import copy from "@/assets/copy.png"
import mercadopago_white from "@/assets/mercadopago_white.png"
import mercadopago_black from "@/assets/mercadopago_black.png"

import styles from "./Donate.module.css"

const DONATE_MESSAGES = [
  "¿Te resultó útil esta app? ¡Tu apoyo hace la diferencia! Tu donación, por pequeña que sea, me ayuda a seguir creando herramientas gratuitas que mejoren tu día a día.",
  "¿Te gustó esta app? ¡Ayudame a seguir innovando! Con tu donación, voy a poder crear más herramientas útiles para vos y todos los usuarios.",
  "¿Encontraste valor en esta app? ¡Tu apoyo es crucial! Incluso una pequeña donación permite que siga desarrollando proyectos que te beneficien.",
  "¿Disfrutaste usando esta app? ¡Tu donación marca la diferencia! Con tu ayuda, voy a seguir creando aplicaciones gratuitas que mejoren tu vida.",
  "¿Esta app te fue útil? ¡Marcá la diferencia con tu apoyo! Tu donación me permite seguir desarrollando herramientas prácticas para todos.",
  "¿Te resultó útil esta app? ¡Apoyá el desarrollo continuo! Tu donación me ayuda a seguir creando proyectos gratuitos que te beneficien cada día.",
]

const randomDonateMessage = () => {
  const randomIndex = Math.floor(Math.random() * DONATE_MESSAGES.length)
  return DONATE_MESSAGES[randomIndex]
}

const Donate = () => {
  const { theme } = useThemeContext()
  const theterAddress = "0x58714dF4C936FB4EA3b15fC42BCF78E9746b37c6"
  useEffect(() => {
    const images = [mercadopago_black, mercadopago_white, kofi, usdt, copy]
    images.forEach((image) => {
      new Image().src = image
    })
  }, [])

  const handleTheterClick = () => {
    copyToClipboard(theterAddress)
    trackEvent("ImageClicked_Theter_Donate")
  }

  return (
    <div className={styles.donateContainer}>
      <h3>¡Ayudame a seguir creando! 🚀</h3>
      <span>{randomDonateMessage()}</span>
      <span>Elegí tu método de pago preferido:</span>
      <a href="https://link.mercadopago.com.ar/jonatandb"
        target="_blank"
        rel="noopener noreferrer"
        title='Donar con MercadoPago'
        onClick={() => trackEvent("ImageClicked_MercadoPago_Donate")}
      >
        <img src={theme === "dark" ? mercadopago_black : mercadopago_white}
          width={100}
          height={40.61}
          alt="MercadoPago banner"
        />
      </a>
      <a href="https://ko-fi.com/L3L31N4GV/"
        target="_blank"
        rel="noopener noreferrer"
        title='Donar con Ko-fi'
        onClick={() => trackEvent("ImageClicked_Ko-fi_Donate")}>
        <img src={kofi}
          alt="Ko-fi banner"
          width={200}
          height={26.89}
        />
      </a>
      <div className={styles.theterWallet} onClick={handleTheterClick}>
        <div title='Donar Theter'>
          <img src={usdt}
            alt="Theter logo"
            width="1rem"
            height="1rem"
          />
          <p>USDT Wallet (BEP-20)</p>
        </div>
        <div>
          <span title='Click par copiar dirección'>&nbsp;&nbsp;{theterAddress}</span>
          <img src={copy}
            alt="Copy icon"
            title='Copiar dirección'
            width="1rem"
            height="1rem"
          />
        </div>
      </div>
    </div>
  )
}

export default Donate