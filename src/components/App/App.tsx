import styles from './app.module.scss';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { setTheme } from '../../utils/setTheme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Login from '@/components/Login';
import TodoPage from '@/components/TodoPage';

const App: React.FC = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    setTheme();
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <div className={styles.app__container}>
        {user ? (
          <>
            <TodoPage />
          </>
        ) : (
          <Login />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
