import settings from '../../assets/settings.png'

import './styles.css'

const SettingsIcon = () => {
  const handleClick = () => {
    alert('Ajustes')
  }

  return <img id="settingsIcon" onClick={handleClick} src={settings} alt="Ícono de ajustes" title="Ajustes" height={30} />
}

export default SettingsIcon