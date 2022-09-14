import Image from "next/image";
import styles from "./styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img class={styles.logo} src="../img/logo2.png" alt="" />
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.links} href="/" >Home </Link>
          </li>

          <li className={styles.listItem}>
            <Link className={styles.links} href="/free-keyword-density-analyser">Tools</Link>
          </li>

          <li className={styles.listItem}>Sign In</li>
          <li className={styles.listItem}>Sign Up</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.account}>
          <img class={styles.icon1} src="../img/search3.png" alt="" />
        </div>
        <div className={styles.account}>
          <img class={styles.icon1} src="../img/account1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
