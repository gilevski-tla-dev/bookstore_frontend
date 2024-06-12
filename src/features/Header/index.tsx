import styles from "./header.module.scss";
import profile_icon from "../../assets/profile-1341-svgrepo-com.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Книжный магазин</h1>
      <div className={styles.login_button}>
        <img src={profile_icon} alt="" />
        <h1>Войти</h1>
      </div>
    </header>
  );
};

export default Header;
