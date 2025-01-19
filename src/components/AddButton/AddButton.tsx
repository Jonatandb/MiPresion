import './styles.css'

import add from '@/assets/add_white.png'

const AddButton = ({ onClick }: { onClick: () => void }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button id="addButton" onClick={handleClick}>
      <img src={add} height={30} alt="Ícono agregar nuevo registro" title="Agregar registro"></img>
    </button>
  )
}

export default AddButton