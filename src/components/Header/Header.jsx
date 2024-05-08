import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <img className={styles.logo} src="/Logo2.svg" alt="header logo" />
    </>
  );
}

export default Header;
