import { StoresContext } from '@/context/index';
import { useContext } from 'react';
import styles from './modal.module.scss';
interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { modalStore } = useContext(StoresContext);

  return (
    <div
      className={styles.modal}
      onClick={(e) => {
        if (e.currentTarget !== e.target) return;
        modalStore.setShowModal(false);
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
