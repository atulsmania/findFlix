import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import Home from "../Home/Home";
import { loadMovies } from "../../selectors";
import { getMovieDatabase } from "../../thunks";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const DEFAULT_CATAGORY = "popular";
function PopularMovies({ movies, getMovies }) {
  const { catagory = DEFAULT_CATAGORY, page = 1 } = useParams();

  useEffect(() => {
    getMovies({ catagory, page });
  }, [page, catagory]);

  return (
    <div>
      {movies.loading && <Loading />}
      {movies.Error && <Error />}
      {!movies.loading && !movies.Error && <Home movies={movies.data.results} page={+page} catagory={catagory} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: loadMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (page) => dispatch(getMovieDatabase(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
