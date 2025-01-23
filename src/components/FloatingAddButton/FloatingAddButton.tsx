import AddButton from "@/components/AddButton/AddButton"

import styles from "./FloatingAddButton.module.css"

interface FloatingAddButtonProps {
  onClick: () => void
}

const FloatingAddButton = ({ onClick }: FloatingAddButtonProps) => {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.buttonContainer}>
        <AddButton onClick={onClick} />
      </div>
    </div>
  )
}

export default FloatingAddButton