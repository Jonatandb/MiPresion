/// <reference types="react" />
interface ModalProps {
    isOpen: boolean;
    fullscreen?: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const Modal: ({ isOpen, fullscreen, onClose, children }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
