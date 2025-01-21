
import favicon60 from '@/assets/favicon_60x60.png'
import favicon120 from '@/assets/favicon_120x120.png'

import styles from './Logo.module.css'

const Logo = () => <img className={`${styles.logo}`} src={favicon60} srcSet={`${favicon60} 60w, ${favicon120} 120w`} alt="Logo de MiPresión - Registro de Presión Sanguínea por Jonatandb" title='MiPresión - Registro de Presión Sanguínea por Jonatandb' height={30} width={30} />


export default Logo