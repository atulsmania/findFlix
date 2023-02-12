import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../routes";
import SVG from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="sticky top-0 navbar text-white bg-primary-400">
      <div className="flex-1">
        <img className="h-16" src={SVG} alt="findFlix" />
      </div>
      <div className="dropdown dropdown-bottom">
        <button className="md:hidden btn btn-square" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          onClick={(e) => e.target.blur()}
          className="max-md:dropdown-content menu md:menu-horizontal right-0 max-md:bg-primary-300 whitespace-nowrap"
        >
          <li>
            <Link to={path.NOW_PLAYING}>Now Playing</Link>
          </li>
          <li>
            <Link to={path.TOP_RATED}>Top Rated</Link>
          </li>
          <li>
            <Link to={path.POPULAR}>Popular</Link>
          </li>
          <li>
            <Link to={path.UP_COMING}>Up Coming</Link>
          </li>
          <li>
            <Link to={path.FAVORITES}>Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
