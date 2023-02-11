import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadMovies } from "../../selectors";
import { getMovieDatabase } from "../../api/thunks";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Movies from "../../components/Movies";

const DEFAULT_CATAGORY = "popular";
function MoviesPage({ movies, getMovies }) {
  const { catagory = DEFAULT_CATAGORY, page = 1 } = useParams();

  useEffect(() => {
    getMovies({ catagory, page });
  }, [page, catagory]);

  return (
    <div>
      {movies.loading && <Loading />}
      {movies.error && <Error />}
      {movies.data && <Movies movies={movies.data.results} page={+page} catagory={catagory} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: loadMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (page) => dispatch(getMovieDatabase(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
