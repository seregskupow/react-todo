import { NativeButton } from 'src/interfaces';
import styles from './button.module.scss';
interface ButtonProps extends NativeButton {
  children: React.ReactNode;
  danger?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  danger = false,
  ...props
}) => {
  const cls = danger ? styles.danger : '';
  return (
    <>
      <button {...props} className={`${styles.button} ${cls}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
