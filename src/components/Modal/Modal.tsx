import { useBodyLock } from '@/hooks/useBodyLock'
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  fullscreen?: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, fullscreen, onClose, children }: ModalProps) => {
  useBodyLock(isOpen);

  if (!isOpen) return null

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={onClose} onTouchMove={handleTouchMove}>
      <div className={`${styles.content} ${fullscreen ? styles.fullscreen : ''}`}
        onClick={handleContentClick}
        onTouchMove={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;