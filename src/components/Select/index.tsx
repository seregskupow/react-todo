import { NativeSelect } from 'src/interfaces';
import styles from './select.module.scss';

interface SelectProps extends NativeSelect {}

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <>
      <select {...props} className={styles.select}>
        {children}
      </select>
    </>
  );
};

export default Select;
