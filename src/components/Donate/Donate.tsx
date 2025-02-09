import { useEffect } from "react"
import { useThemeContext } from "@/hooks/useTheme"
import { copyToClipboard } from "@/utils/copyToClipboard"
import { trackEvent } from "@/utils/analytics"
import { Theme } from "@/contexts/ThemeEnum"

import usdt from "@/assets/usdt.png"
import kofi from "@/assets/ko-fi.png"
import copy from "@/assets/copy.png"
import mercadopago_white from "@/assets/mercadopago_white.png"
import mercadopago_black from "@/assets/mercadopago_black.png"

import styles from "./Donate.module.css"

const DONATE_TITLES = [
  "Donar ahora",
  "Apoyar el proyecto",
  "Contribuir"
]

const DONATE_EMOJIS = ["🙏🏻", "⭐", "💚", "💖", "💙", "💕", "💛", "💓", "💌", "❤️", "🌟", "🚀", "☕"]

const DONATE_MESSAGES = [
  "¡Tu apoyo es vital para mantener esta app viva! Cada donación, por pequeña que sea, me permite seguir ofreciendo herramientas gratuitas que hacen tu vida más fácil. ¡Gracias por ser parte de esto!",
  "¿Te gusta esta app? ¡Ayúdame a mantenerla gratis para todos! Tu donación no solo me inspira, sino que también me da los recursos para seguir mejorando y creando contenido útil.",
  "¿Esta app te ha ayudado? ¡Imaginate lo que podríamos lograr juntos! Tu donación es una inversión en más herramientas gratuitas y de calidad para todos.",
  "¿Te gustaría ver más proyectos como este? ¡Tu donación lo hace posible! Cada aporte me acerca un paso más a seguir creando soluciones que beneficien a todos.",
  "¿Te ha sido útil esta app? ¡Tu generosidad puede cambiar todo! Con tu donación, puedo dedicar más tiempo y recursos a mejorar y expandir esta herramienta para vos y muchos más.",
  "¿Te gusta lo que hago? ¡Tu apoyo es mi combustible! Cada donación, por pequeña que sea, me motiva a seguir creando y compartiendo herramientas que hacen la diferencia.",
  "¿Te ha servido esta app? ¡Ayúdame a seguir ayudando! Tu donación no solo me permite mantener este proyecto, sino también crear nuevos que beneficien a más personas como vos.",
  "¿Te gustaría que esta app siga creciendo? ¡Tu donación es clave! Con tu apoyo, puedo seguir desarrollando y mejorando herramientas que hacen tu vida más sencilla.",
  "¿Te ha gustado esta app? ¡Tu donación es un voto de confianza! Me ayuda a seguir trabajando en proyectos que te benefician a vos y a miles de usuarios más.",
  "¿Te ha resultado útil esta app? ¡Tu apoyo es invaluable! Con tu donación, puedo seguir ofreciendo herramientas gratuitas y de calidad que mejoran tu día a día.",
  "¿Te gusta lo que hago? ¡Tu donación es mi mayor recompensa! Me ayuda a seguir creando y compartiendo herramientas que hacen la diferencia en la vida de las personas.",
  "¿Te ha servido esta app? ¡Tu donación es un gesto que vale oro! Me permite seguir trabajando en proyectos que benefician a todos, incluido vos.",
  "¿Te gustaría que esta app siga mejorando? ¡Tu donación lo hace posible! Cada aporte me acerca un paso más a ofrecerte herramientas aún más útiles y eficientes.",
  "¿Te ha gustado esta app? ¡Tu donación es un abrazo de apoyo! Me motiva a seguir creando y compartiendo soluciones que hacen tu vida más fácil.",
  "¿Te ha resultado útil esta app? ¡Tu donación es un gesto de gratitud que me inspira a seguir trabajando en proyectos que benefician a todos."
]
const getRandomIndex = (itemsArray: string[]) => {
  return Math.floor(Math.random() * itemsArray.length)
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
      <h3>{DONATE_TITLES[getRandomIndex(DONATE_TITLES)]}</h3>
      <span>{DONATE_EMOJIS[getRandomIndex(DONATE_EMOJIS)]} {DONATE_MESSAGES[getRandomIndex(DONATE_MESSAGES)]}</span>
      <a href="https://link.mercadopago.com.ar/jonatandb"
        target="_blank"
        rel="noopener noreferrer"
        title='Donar con MercadoPago'
        onClick={() => trackEvent("ImageClicked_MercadoPago_Donate")}
      >
        <img src={theme === Theme.Dark ? mercadopago_black : mercadopago_white}
          width={100}
          height={40.61}
          alt="MercadoPago banner"
        />
      </a>
      <button className={styles.theterWallet} onClick={handleTheterClick}>
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
      </button>
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
    </div>
  )
}

export default Donate