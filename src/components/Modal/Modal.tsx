import './styles.css';

interface ModalProps {
  isOpen: boolean
  fullscreen?: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, fullscreen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className={`content ${fullscreen ? 'fullscreen' : ''}`} onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;