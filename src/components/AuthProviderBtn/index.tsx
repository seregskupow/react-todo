import styles from './auth_provider_btn.module.scss';
import { ReactComponent as FacebookImg } from './facebook.svg';
import { ReactComponent as GoogleImg } from './google.svg';
interface AuthProviderBtnProps {
  //provider: 'google' | "facebook" | "gitub etc";
  provider: 'google' | 'facebook';
  onClick: () => void;
  disabled?: boolean;
}

const providers = {
  google: {
    img: <GoogleImg />,
    title: 'Google',
  },
  facebook: {
    img: <FacebookImg />,
    title: 'Facebook',
  },
};

const AuthProviderBtn: React.FC<AuthProviderBtnProps> = ({
  provider,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type='button'
      className={styles.provider__btn}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={styles.provider__logo}>{providers[provider].img}</div>
      <span>{providers[provider].title}</span>
    </button>
  );
};

export default AuthProviderBtn;
