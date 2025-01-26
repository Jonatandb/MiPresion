import { useEffect } from "react"
import add from "@/assets/add.png"

import styles from "./AddButton.module.css"

interface AddButtonProps {
  onClick: () => void
}

const AddButton = ({ onClick }: AddButtonProps) => {
  useEffect(() => {
    const images = [add];
    images.forEach((image) => {
      new Image().src = image;
    });
  }, [])

  return (
    <button className={styles.addButton} onClick={onClick}>
      <img
        src={add}
        width={64}
        height={64}
        alt="Ícono agregar nueva medición"
        title="Agregar medición" />
    </button>
  )
}

export default AddButton