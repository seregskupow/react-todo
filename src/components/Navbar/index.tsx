import Profile from '@/components/Profile';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'src/firebase';
import styles from './navbar.module.scss';

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__item}>
          <h3 className={styles.app__name}>TODO APP</h3>
        </div>
        <div className={styles.header__item}>
          {user && (
            <Profile
              name={user?.displayName as string}
              avatarUrl={user?.photoURL as string}
              logout={logout}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
