import styles from './AddButton.module.css'

import add from '@/assets/add_white.png'

const AddButton = ({ onClick }: { onClick: () => void }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button className={`${styles.addButtonContainer}`} onClick={handleClick}>
      <div className={styles.imgContainer}>
        <img src={add} height={30} alt="Ícono agregar nuevo registro" title="Agregar registro"></img>
      </div>
    </button>
  )
}

export default AddButton