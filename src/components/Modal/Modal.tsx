import './styles.css';

const Modal = ({ onClose, children, fullscreen }: { onClose: () => void, children: React.ReactNode, fullscreen?: boolean }) => {

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