import React from "react";
import SVG from "assets/logo.svg";
import styles from "components/Logo/styles.module.scss";

function Logo() {
  return <img className={styles.Logo} src={SVG} alt="findFlix" />;
}

export default Logo;
