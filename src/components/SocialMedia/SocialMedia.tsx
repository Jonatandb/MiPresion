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

  return (
    <>
      <h2 className={styles.title}>Desarrollado por Jonatandb</h2>
      <div className={styles.socialMediaContainer}>
        <div className={styles.pictureContainer}>
          <a href="http://jonatandb.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            title='Ir al sitio web de Jonatandb'
            onClick={() => trackEvent("ImageClicked_ProfilePicture_SocialMedia")}
          >
            <img
              src={jonatandb}
              alt="Foto de Jonatandb"
              title="Ir al sitio web de Jonatandb"
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className={styles.linksContainer}>
          <a href="mailto:jonatandb@gmail.com" onClick={() => trackEvent("LinkClicked_Gmail_SocialMedia")}>
            <img src={gmail} width="1rem" height="1rem" alt="Logo de Gmail" title='Correo a Jonatandb' />
            Gmail
          </a>
          <a href="http://github.com/jonatandb" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("LinkClicked_Github_SocialMedia")}>
            <img src={github} width="1rem" height="1rem" alt="Logo de Github" title='Ir al Github de Jonatandb' />
            Github
          </a>
          <a href="http://linkedin.com/in/jonatandb" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("LinkClicked_LinkedIn_SocialMedia")}>
            <img src={linkedin} width="1rem" height="1rem" alt="Logo de LinkedIn" title='Ir al LinkedIn de Jonatandb' />
            LinkedIn
          </a>
          <a href="https://twitter.com/jonatandb" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("LinkClicked_Twitter_SocialMedia")}>
            <img src={twitter} width="1rem" height="1rem" alt="Logo de X (Twitter)" title='Ir al Twitter de Jonatandb' />
            X (Twitter)
          </a>
        </div>
      </div>
    </>
  )
}

export default SocialMedia