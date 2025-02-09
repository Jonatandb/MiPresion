import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share"

import styles from "./Share.module.css"
import { trackEvent } from "@/utils/analytics"

const Share = () => {
  const shareUrl = "https://jonatandb.dev.ar/MiPresion/"
  const title = "MiPresión - Registro de presión sanguínea por Jonatandb"

  return (
    <div className={styles.shareContainer}>

      <div className={styles.shareNetwork} onClick={() => trackEvent("LinkClicked_Facebook_Share")}>
        <FacebookShareButton url={shareUrl} className={styles.shareNetworkButton}>
          <FacebookIcon size={24} round />
        </FacebookShareButton>
      </div>

      <div className={styles.shareNetwork} onClick={() => trackEvent("LinkClicked_Whatsapp_Share")}>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className={styles.shareNetworkButton}
        >
          <WhatsappIcon size={24} round />
        </WhatsappShareButton>
      </div>

      <div className={styles.shareNetwork} onClick={() => trackEvent("LinkClicked_Twitter_Share")}>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className={styles.shareNetworkButton}
        >
          <XIcon size={24} round />
        </TwitterShareButton>
      </div>

    </div>
  )
}

export default Share