import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import styles from "./Header.module.scss";

function Header({ theme, onClick }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>TODO</h1>
      <button className={styles.headerBtn} onClick={onClick}>
        {theme ? (
          <SunIcon className="header__btn__icon" />
        ) : (
          <MoonIcon className="header__btn__icon" />
        )}
      </button>
    </div>
  );
}

export default Header;

{
  /* <MoonIcon /> */
}
