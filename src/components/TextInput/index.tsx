import { NativeTextInput } from 'src/interfaces';
import styles from './textinput.module.scss';

interface TextInputProps extends Omit<NativeTextInput, 'type'> {}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <>
      <input className={styles['text-input']} {...props} type='text' />
    </>
  );
};

export default TextInput;
