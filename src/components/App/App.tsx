import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import TodoPage from '@/components/TodoPage';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'src/firebase';
import { setTheme } from '../../utils/setTheme';
import styles from './app.module.scss';

const App: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    setTheme();
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <div className={styles.app__container}>
        {loading && <Loader />}
        {!loading && !user && <Login />}
        {user && <TodoPage />}
      </div>

      <Footer />
    </div>
  );
};

export default App;
