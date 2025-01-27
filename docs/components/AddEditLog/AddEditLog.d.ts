export interface LogData {
    id: string;
    systolic: number | string;
    diastolic: number | string;
    pulse: number | string;
    medicine: boolean;
    notes: string;
    date: string;
}
interface AddEditLogProps {
    onClose: () => void;
}
declare const AddEditLog: ({ onClose }: AddEditLogProps) => import("react/jsx-runtime").JSX.Element;
export default AddEditLog;
