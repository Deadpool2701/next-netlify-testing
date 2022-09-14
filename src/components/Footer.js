import Image from "next/image";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div class={styles.footer}>
        <div class={styles.footer_text1}>
          <ul style={{ listStyleType: "none" }}>
            <li class={styles.logo}>
              <Image src="/img/logo2.png" alt="" width="155px" height="25px" />
            </li>
            <li>Place where intuitiveness begins</li>
            <li>Gurugram Lorem Ipsum,</li>
            <li>is simply dummy</li>
            <li>text of the printing.</li>
          </ul>
        </div>
        <div class={styles.footer_text2}>
          <ul style={{ listStyleType: "none" }}>
          <a href="/free-keyword-density-analyser"> <li> Home </li></a>
            <li class={styles.listitem}>About Us</li>
            <li>Contact Us</li>
            <li>Book Free Trial</li>
          </ul>
        </div>
        <div class={styles.footer_text3}>
          <ul style={{ listStyleType: "none" }}>
            <li>Find Us On:</li>
            <li class={styles.socialmedia}>
              <a href=""><Image src="../img/insta.png" alt="" width="40px" height="40px" /></a>
              <a href=""><Image src="../img/insta.png" alt="" width="40px" height="40px" /></a>
              <a href=""><Image src="../img/insta.png" alt="" width="40px" height="40px" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
