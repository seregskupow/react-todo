import React from 'react';
import styles from './navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h3 className={styles.app__name}>TODO APP</h3>
      </div>
    </header>
  );
};

export default Navbar;
