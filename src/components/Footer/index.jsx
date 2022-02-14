import React from "react";
import { Logo } from "components";
import styles from "components/Footer/styles.module.scss";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Logo />
    </div>
  );
}

export default Footer;
