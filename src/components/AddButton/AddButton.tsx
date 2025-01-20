import styles from './AddButton.module.css'

import add from '@/assets/add_white.png'

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
        <img src={add} height={30} alt="Ícono agregar nuevo registro" title="Agregar registro"></img>
      </div>
    </button>
  )
}

export default AddButton