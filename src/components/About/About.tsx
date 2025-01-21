import { useThemeContext } from '@/hooks/useTheme'

import jonatandb from '@/assets/jonatandb.jpg'
import usdt from '@/assets/usdt.png'
import kofi from '@/assets/ko-fi.png'
import gmail from '@/assets/gmail.png'
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'
import twitter from '@/assets/twitter.png'
import mercadopago_white from '@/assets/mercadopago_white.png'
import mercadopago_black from '@/assets/mercadopago_black.png'
import copy from '@/assets/copy.png'

import styles from './About.module.css'

const images = [
  jonatandb,
  gmail,
  github,
  linkedin,
  twitter,
  mercadopago_black,
  mercadopago_white,
  kofi,
  usdt,
  copy,
];

images.forEach((image) => {
  new Image().src = image;
});

interface AboutProps {
  onClose: () => void
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Dirección copiada, gracias! 🚀');
  })
};

const About = ({ onClose }: AboutProps) => {
  const { theme } = useThemeContext()

  return (
    <div className={styles.aboutContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <h2>Desarrollado por Jonatandb</h2>
        <div className={styles.pictureContainer}>
          <a href="http://jonatandb.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            title='Ir al sitio web de Jonatandb'
          >
            <img
              src={jonatandb}
              alt="Foto de Jonatandb"
              title="Foto de Jonatandb"
              width={100}
              height={100}
            />
          </a>
          <div className={styles.linksContainer}>
            <a href="mailto:jonatandb@gmail.com">
              <img src={gmail} width="1rem" height="1rem" alt="Logo de Gmail" />
              Gmail
            </a>
            <a href="http://github.com/jonatandb" target="_blank" rel="noopener noreferrer">
              <img src={github} width="1rem" height="1rem" alt="Logo de Github" />
              Github
            </a>
            <a href="http://linkedin.com/in/jonatandb" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} width="1rem" height="1rem" alt="Logo de LinkedIn" />
              LinkedIn
            </a>
            <a href="https://twitter.com/jonatandb" target="_blank" rel="noopener noreferrer">
              <img src={twitter} width="1rem" height="1rem" alt="Logo de X (Twitter)" />
              X (Twitter)
            </a>
          </div>
        </div>
        <div className={styles.donateContainer}>
          <p>💃🏻💸🕺🏻 Donaciones 🚀🙌🏻🤙🏻</p>
          <span>Si deseás apoyar mi trabajo, podés hacerlo por estos medios:</span>
          <div className={styles.donateBanners}>
            <a href="https://link.mercadopago.com.ar/jonatandb" target="_blank" rel="noopener noreferrer" title='Donar con MercadoPago'>
              <img src={theme === 'dark' ? mercadopago_black : mercadopago_white} width={100} height={40.61} alt="MercadoPago banner" />
            </a>
            <a href="https://ko-fi.com/L3L31N4GV/" target="_blank" rel="noopener noreferrer" title='Donar con Ko-fi'>
              <img src={kofi} alt="Ko-fi banner" width={200} height={26.89} />
            </a>
          </div>
          <div className={styles.theterWallet}>
            <div title='Donar Theter'>
              <img src={usdt} alt="Theter logo" width="1rem" height="1rem" />
              <p>USDT Wallet (BEP-20)</p>
            </div>
            <div onClick={() => copyToClipboard('0x58714dF4C936FB4EA3b15fC42BCF78E9746b37c6')} >
              <span title='Click par copiar dirección'>&nbsp;&nbsp;0x58714dF4C936FB4EA3b15fC42BCF78E9746b37c6</span>
              <img src={copy} alt="Copy icon" title='Copiar dirección' width="1rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About