import Button from '@/components/Button';
import ThemeToggle from '@/components/ThemeToggle';
import React, { useEffect, useRef, useState } from 'react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { RiLogoutBoxLine } from 'react-icons/ri';
import styles from './profile.module.scss';
interface ProfileProps {
  name: string;
  avatarUrl: string;
  logout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ name, avatarUrl, logout }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const profileBtn = useRef<HTMLDivElement>(null);
  const clickHandler = () => setShowMenu(!showMenu);
  const handleClick = (e: any) => {
    if (profileBtn.current?.contains(e.target)) {
      return;
    }
    setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div ref={profileBtn} className={styles.profile__wrapper}>
      <div className={styles.profile} onClick={clickHandler}>
        <img className={styles.profile__img} src={avatarUrl} alt='' />
        <p className={styles.profile__name}>{name}</p>
        <div className={styles.arrow__icon}>
          {showMenu ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </div>
      </div>
      {showMenu && (
        <ul className={styles.profile__menu}>
          <li className={styles.profile__menu__item}>
            <ThemeToggle />
          </li>
          <li className={styles.profile__menu__item}>
            <Button danger onClick={logout}>
              <div className={styles.logout__btn}>
                <p className={styles.btn__label}>Logout</p>
                <RiLogoutBoxLine />
              </div>
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
