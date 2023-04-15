import { useQuery } from "react-query";
import { Category, getMovies, Movie } from "@/api";
import Carousal from "@/components/Carousal";
import Card from "@/components/Card";
import If from "@/components/If";
import { ReactComponent as ArrowSVG } from "@/assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import { BackdropSize, getImagePath } from "@/utils";

type MoviesCarouselProps = {
  category: Category;
};

const MoviesCarousel = ({ category }: MoviesCarouselProps) => {
  const { data: movies, isFetched } = useQuery([category, 1], getMovies);

  const results =
    movies?.results ?? Array.from({ length: 4 }, (_, i) => ({} as Movie));

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 cursor-pointer empty:skeleton empty:h-6 empty:w-28 group w-fit">
        <If is={isFetched}>
          <h3 className="font-semibold uppercase">
            {category.replace("_", " ")}
          </h3>
          <span className="transition-all -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
            <ArrowSVG />
          </span>
        </If>
      </div>
      <Carousal>
        {results.map((movie, index) => {
          return (
            <Carousal.Item key={index}>
              <If is={isFetched}>
                <Link to={`/${movie.id}`}>
                  <Card>
                    <Card.Image
                      src={getImagePath(BackdropSize.W300, movie.backdrop_path)}
                    />
                    <Card.Body></Card.Body>
                  </Card>
                </Link>
              </If>
            </Carousal.Item>
          );
        })}
      </Carousal>
    </div>
  );
};

export default MoviesCarousel;
