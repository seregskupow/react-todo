import styles from './loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader__container}>
      <h1 className={styles.loading}>
        Loading <span className={styles.dot}>.</span>{' '}
        <span className={styles.dot}>.</span>{' '}
        <span className={styles.dot}>.</span>
      </h1>
    </div>
  );
};

export default Loader;
