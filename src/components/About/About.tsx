
import ContactForm from "@/components/ContactForm/ContactForm"
import Logo from "@/components/Logo/Logo"

import styles from "./About.module.css"

interface AboutProps {
  onClose: () => void
}

const About = ({ onClose }: AboutProps) => {

  return (
    <div className={styles.aboutContainer} onTouchMove={e => e.stopPropagation()}>
      <div className={styles.header}>
        <Logo />
        <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>Cerrar</button>
      </div>
      <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
        <ContactForm />
      </div>
    </div>
  )
}

export default About