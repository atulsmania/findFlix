import { Link } from "react-router-dom";

const NavList = ["Home", "Movies", "Series", "Genres", "My List"];

const Navbar = () => {
  return (
    <ul className="menu menu-horizontal bg-base-100">
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <span>Parent</span>
        <ul className="bg-base-100">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
          <li>
            <a>Submenu 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
};

export default Navbar;
