import { Category } from "@/api";
import MoviesCarousel from "@/containers/MoviesCarousel";

const Home = () => {
  return (
    <div className="flex flex-col">
      <MoviesCarousel category={Category.POPULAR} />
      <MoviesCarousel category={Category.NOW_PLAYING} />
      <MoviesCarousel category={Category.TOP_RATED} />
      <MoviesCarousel category={Category.UP_COMING} />
    </div>
  );
};

export default Home;
