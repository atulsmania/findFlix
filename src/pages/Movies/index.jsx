import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadMovies } from "../../selectors";
import { getMovieDatabase } from "../../api/thunks";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";

const DEFAULT_CATEGORY = "popular";
function Movies({ movies, getMovies }) {
  const { category = DEFAULT_CATEGORY, page = 1 } = useParams();

  useEffect(() => {
    getMovies({ category, page });
  }, [page, category]);

  return (
    <div className="flex flex-wrap">
      {movies.loading && <Loading />}
      {movies.error && <Error />}
      {movies.data &&
        movies.data.results.map((item) => {
          return <MovieCard key={item.id} movie={item} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: loadMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (page) => dispatch(getMovieDatabase(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
