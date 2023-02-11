import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../routes";
import Logo from "../Logo";

function Navbar() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <Link to={path.NOW_PLAYING}>
          <h1>Now Playing</h1>
        </Link>
        <Link to={path.TOP_RATED}>
          <h1>Top Rated</h1>
        </Link>
        <Link to={path.POPULAR}>
          <h1>Popular</h1>
        </Link>
        <Link to={path.UP_COMING}>
          <h1>Up Coming</h1>
        </Link>

        <Link to={path.FAVORITES}>
          <button type="button">Favorites</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
