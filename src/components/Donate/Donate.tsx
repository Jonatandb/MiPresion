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

const Donate = () => {
  const { theme } = useThemeContext()

  useEffect(() => {
    const images = [mercadopago_black, mercadopago_white, kofi, usdt, copy]
    images.forEach((image) => {
      new Image().src = image
    })
  }, [])

  return (
    <div className={styles.donateContainer}>
      <h3>Donaciones</h3>
      <span>Esta App es gratuita 💸</span>
      <span>Pero si te sirvió y deseás apoyar mi trabajo,</span>
      <span>presióna en tu medio preferido:</span>
      <div className={styles.donateBanners}>
        <a href="https://link.mercadopago.com.ar/jonatandb" target="_blank" rel="noopener noreferrer" title='Donar con MercadoPago' onClick={() => trackEvent("ImageClicked_MercadoPago_Donate")}>
          <img src={theme === "dark" ? mercadopago_black : mercadopago_white} width={100} height={40.61} alt="MercadoPago banner" />
        </a>
        <a href="https://ko-fi.com/L3L31N4GV/" target="_blank" rel="noopener noreferrer" title='Donar con Ko-fi' onClick={() => trackEvent("ImageClicked_Ko-fi_Donate")}>
          <img src={kofi} alt="Ko-fi banner" width={200} height={26.89} />
        </a>
      </div>
      <div className={styles.theterWallet} onClick={() => trackEvent("ImageClicked_Theter_Donate")}>
        <div title='Donar Theter'>
          <img src={usdt} alt="Theter logo" width="1rem" height="1rem" />
          <p>USDT Wallet (BEP-20)</p>
        </div>
        <div onClick={() => copyToClipboard("0x58714dF4C936FB4EA3b15fC42BCF78E9746b37c6")} >
          <span title='Click par copiar dirección'>&nbsp;&nbsp;0x58714dF4C936FB4EA3b15fC42BCF78E9746b37c6</span>
          <img src={copy} alt="Copy icon" title='Copiar dirección' width="1rem" height="1rem" />
        </div>
      </div>
    </div>

  )
}

export default Donate