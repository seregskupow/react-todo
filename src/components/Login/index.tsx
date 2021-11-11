import { FC } from 'react';
import styles from './login.module.scss';
import { auth } from '../../firebase';
import firebase from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login: FC = () => {
  const sighInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };
  return (
    <div className={styles.login__container}>
      <button onClick={sighInWithGoogle}>Login</button>
    </div>
  );
};
export default Login;
