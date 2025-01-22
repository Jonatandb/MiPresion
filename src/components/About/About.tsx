
import ContactForm from '@/components/ContactForm/ContactForm'
import Donate from '@/components/Donate/Donate'
import SocialMedia from '@/components/SocialMedia/SocialMedia'

import styles from './About.module.css'

interface AboutProps {
  onClose: () => void
}

const About = ({ onClose }: AboutProps) => {

  return (
    <div className={styles.aboutContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <ContactForm />
        <h2>Desarrollado por Jonatandb</h2>
        <SocialMedia />
        <Donate />
      </div>
    </div>
  )
}

export default About