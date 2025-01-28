import { useEffect } from "react"

import jonatandb from "@/assets/jonatandb.jpg"
import gmail from "@/assets/gmail.png"
import github from "@/assets/github.png"
import linkedin from "@/assets/linkedin.png"
import twitter from "@/assets/twitter.png"

import styles from "./SocialMedia.module.css"
import { trackEvent } from "@/utils/analytics"

const SocialMedia = () => {
  useEffect(() => {
    const images = [jonatandb, gmail, github, linkedin, twitter]
    images.forEach((image) => {
      new Image().src = image
    })
  }, [])

  const handleImageClick = () => {
    trackEvent("ImageClicked_ProfilePicture_SocialMedia")
    window.open("http://jonatandb.github.io/", "_blank", "noopener,noreferrer")
  }

  return (
    <div className={styles.socialMediaContainer}>
      <h4 className={`${styles.title}`}>Desarrollado por Jonatandb</h4>
      <div className={styles.socialMediaContent}>
        <div className={styles.socialMediaContentWrapper}>

          <div className={styles.pictureContainer}>
            <img src={jonatandb}
              alt="Foto de Jonatandb"
              title="Ir al sitio web de Jonatandb"
              width={100}
              onClick={handleImageClick}
            />
          </div>

          <div className={styles.linksContainer}>
            <a href="mailto:jonatandb@gmail.com"
              onClick={() => trackEvent("LinkClicked_Gmail_SocialMedia")}
            >
              <img src={gmail}
                alt="Logo de Gmail"
                title='Correo a Jonatandb'
                width={16}
              />
              Gmail
            </a>
            <a href="http://github.com/jonatandb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("LinkClicked_Github_SocialMedia")}
            >
              <img src={github}
                alt="Logo de Github"
                title='Ir al Github de Jonatandb'
                width={16}
              />
              Github
            </a>
            <a href="http://linkedin.com/in/jonatandb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("LinkClicked_LinkedIn_SocialMedia")}
            >
              <img src={linkedin}
                alt="Logo de LinkedIn"
                title='Ir al LinkedIn de Jonatandb'
                width={16}
              />
              LinkedIn
            </a>
            <a href="https://twitter.com/jonatandb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("LinkClicked_Twitter_SocialMedia")}
            >
              <img src={twitter}
                alt="Logo de X (Twitter)"
                title='Ir al Twitter de Jonatandb'
                width={16}
              />
              X (Twitter)
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SocialMedia