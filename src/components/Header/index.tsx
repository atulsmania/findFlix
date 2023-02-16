import { Link } from "react-router-dom";
import { ReactComponent as SunSVG } from "@/assets/icons/sun.svg";
import { ReactComponent as MoonSVG } from "@/assets/icons/moon.svg";
import { ReactComponent as SearchSVG } from "@/assets/icons/search.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 navbar bg-base-100">
      <div className="navbar-start">
        <Link to={"/"} className="px-2 text-2xl font-bold normal-case">
          FindFlix
        </Link>
      </div>
      <div className="space-x-4 navbar-end">
        <Search />
        <ThemeToggle />
      </div>
    </header>
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
