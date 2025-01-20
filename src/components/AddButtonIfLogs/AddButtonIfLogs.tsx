import { useLogContext } from "@/hooks/useLogContext"
import AddButton from "../AddButton/AddButton"

const AddButtonIfLogs = ({ handleAddButtonClick }: { handleAddButtonClick: () => void }) => {
  const { logs } = useLogContext()
  return logs.length > 0 ? <AddButton onClick={handleAddButtonClick} /> : null
}

export default AddButtonIfLogs