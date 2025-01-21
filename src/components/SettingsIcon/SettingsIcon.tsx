import settings from '@/assets/settings.png'

import styles from './SettingsIcon.module.css'

const SettingsIcon = ({ onClick }: { onClick: () => void }) => {
  const handleClick = () => {
    onClick()
  }

  return <img className={`${styles.settingsIcon}`} onClick={handleClick} src={settings} alt="Ícono de ajustes" title="Ajustes" height="30" width="30" />
}

export default SettingsIcon