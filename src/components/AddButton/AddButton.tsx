import add from '@/assets/add.png'

import styles from './AddButton.module.css'

interface AddButtonProps {
  onClick: () => void
  extraStyles?: {
    addButtonContainer?: string
    imgContainer?: string
  }
}

const AddButton = ({ onClick, extraStyles }: AddButtonProps) => {

  const handleClick = () => {
    onClick()
  }

  return (
    <button className={`${styles.addButtonContainer} ${extraStyles && extraStyles['addButtonContainer'] || ''}`} onClick={handleClick}>
      <div className={`${styles.imgContainer} ${extraStyles && extraStyles['imgContainer'] || ''}`}>
        <img src={add} width={64} height={64} alt="Ícono agregar nuevo registro" title="Agregar registro"></img>
      </div>
    </button>
  )
}

export default AddButton