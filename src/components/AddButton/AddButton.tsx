import add from "@/assets/add.png"

import styles from "./AddButton.module.css"

interface AddButtonProps {
  onClick: () => void
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <img
        src={add}
        width={64}
        height={64}
        alt="Ícono agregar nuevo registro"
        title="Agregar registro" />
    </button>
  )
}

export default AddButton