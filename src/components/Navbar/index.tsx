import { Link } from "react-router-dom";

const NavList = ["Home", "Movies", "Series", "Genres", "My List"];

const Navbar = () => {
  return (
    <nav className="max-w-xs top-14 drawer">
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100 text-base-content">
          {NavList.map((item) => (
            <li>
              <Link to="">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
