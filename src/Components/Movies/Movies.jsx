import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { Home } from "..";
import { loadMovies } from "../../selectors";
import { getMovieDatabase } from "../../thunks";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function PopularMovies({ movies, getMovies }) {
  const defaultCatagory = "popular";
  const { catagory = defaultCatagory, page = 1 } = useParams();

  useEffect(() => {
    getMovies({ catagory, page });
  }, [page, catagory]);

  return (
    <div>
      {movies.loading ? (
        <Loading />
      ) : movies.data ? (
        <Home movies={movies.data.results} page={+page} catagory={catagory} />
      ) : (
        <Error />
      )}
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
