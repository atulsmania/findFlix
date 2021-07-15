import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1 className={styles.title}>Popular Movies</h1>
      </Link>
      <Link to="/favourites">
        <button>Favourites</button>
      </Link>
    </div>
  );
}

export default Navbar;
