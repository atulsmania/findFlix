import React from "react";
import styles from "./styles.module.scss";
import SVG from "../../assets/logo.svg";

function Logo() {
  return <img className={styles.Logo} src={SVG} alt="findFlix" />;
}

export default Logo;
