import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { path } from "../../routePaths";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <h1>flixNchill</h1>
      </div>
      <div className={styles.catagory}>
        <Link to={path.NOW_PLAYING}>
          <h1 className={styles.title}>Now Playing</h1>
        </Link>
        <Link to={path.TOP_RATED}>
          <h1 className={styles.title}>Top Rated</h1>
        </Link>
        <Link to={path.POPULAR}>
          <h1 className={styles.title}>Popular</h1>
        </Link>
        <Link to={path.UP_COMING}>
          <h1 className={styles.title}>Up Coming</h1>
        </Link>

        <Link to={path.FAVOURITES}>
          <button>Favourites</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
