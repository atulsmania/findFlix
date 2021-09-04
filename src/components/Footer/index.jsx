import React from "react";
import Logo from "../Logo";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Logo />
    </div>
  );
}

export default Footer;
