import { useState } from "react"
import Header from "./components/Header/Header"
import LogsList from "./components/LogsList/LogsList"
import AddButton from "./components/AddButton/AddButton"

const App = () => {
  const [showAddButton, setShowAddButton] = useState(true)

  const handleAddButton = () => {
    alert("Agregar nuevo registro")
  }

  return (
    <>
      <Header />
      <LogsList />

      {
        showAddButton && <AddButton onClick={handleAddButton} />
      }
    </>
  )
}

export default App