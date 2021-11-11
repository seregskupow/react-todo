import { FC } from 'react';
import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <h3 className={styles.made__by}>MADE BY SERGEY SKUPOW</h3>
      </div>
    </footer>
  );
};

export default Footer;
