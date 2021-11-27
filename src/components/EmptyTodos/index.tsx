import styles from './emptytodos.module.scss';
import Travolta from './travolta.png';
const EmptyTodos: React.FC = () => {
  return (
    <div className={styles['empty-todos__wrapper']}>
      <div className={styles['empty-todos']}>
        <img className={styles.empty__img} src={Travolta} alt='travolta' />
        <p className={styles.empty__text}>Nothing here . . .</p>
      </div>
    </div>
  );
};

export default EmptyTodos;
