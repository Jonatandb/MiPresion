import { useLogContext } from "@/hooks/useLogContext"
import AddButton from "@/components/AddButton/AddButton"

const AddButtonIfLogs = ({ onAddClicked }: { onAddClicked: () => void }) => {
  const { logs } = useLogContext()
  return logs.length > 0 ? <AddButton onClick={onAddClicked} /> : null
}

export default AddButtonIfLogs