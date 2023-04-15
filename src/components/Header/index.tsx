import { ReactComponent as SunSVG } from "@/assets/icons/sun.svg";
import { ReactComponent as MoonSVG } from "@/assets/icons/moon.svg";
import { ReactComponent as SearchSVG } from "@/assets/icons/search.svg";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start lg:w-fit">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">FindFlix</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 gap-4 navbar-end">
        <Search />
        <ThemeToggle />
      </div>
    </div>
  );
};

const ThemeToggle = () => {
  const handleToggleThemeClick = () => {
    const themes = ["night", "cmyk"];

    const appliedTheme = document
      .querySelector("html")
      ?.getAttribute("data-theme");

    document
      .querySelector("html")
      ?.setAttribute(
        "data-theme",
        appliedTheme === themes[0] ? themes[1] : themes[0]
      );
  };

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle">
      <input onChange={handleToggleThemeClick} type="checkbox" />
      <MoonSVG className="scale-150 fill-current swap-on" />

      <SunSVG className="scale-150 fill-current swap-off" />
    </label>
  );
};

const Search = () => {
  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="block w-full max-w-xs p-4 pr-12 rounded-full input input-bordered input-md focus:outline-none"
          placeholder="Search"
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <SearchSVG className="scale-150" />
        </div>
      </div>
    </form>
  );
};

export default Header;
