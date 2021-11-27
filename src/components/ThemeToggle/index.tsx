import Switch from '@/components/Switch';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './theme_toggle.module.scss';

const ThemeToggle: React.FC = () => {
  const [isDark, setDark] = useState<boolean | null>(null);
  useEffect(() => {
    const theme: string | null = localStorage.getItem('theme');
    if (theme) {
      setDark(theme === 'dark');
      return;
    }
  }, []);
  const setDarkTheme = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    setDark(true);
  };
  const setLightTheme = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    setDark(false);
  };
  const themeToggle = () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };
  return (
    <div className={styles.theme__toggle__btn}>
      <p>Theme: </p>
      <div className={styles.theme__toggle}>
        <div
          className={[styles.icon, styles.moon].join(' ')}
          onClick={() => {
            setDarkTheme();
          }}
        >
          <FaMoon />
        </div>
        {isDark !== null && <Switch checked={isDark} callback={themeToggle} />}
        <div
          className={[styles.icon, styles.sun].join(' ')}
          onClick={() => {
            setLightTheme();
          }}
        >
          <FaSun />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
