import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FC } from 'react';
import { auth } from '../../firebase';
import AuthProviderBtn from '../AuthProviderBtn';
import styles from './login.module.scss';

const Login: FC = () => {
  const sighInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };
  return (
    <div className={styles.login__container}>
      <div className={styles.login}>
        <h1 className={styles.login__title}>Login with:</h1>
        <AuthProviderBtn provider='google' onClick={sighInWithGoogle} />
        <AuthProviderBtn provider='facebook' onClick={() => {}} disabled />
      </div>
    </div>
  );
};
export default Login;
