import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "../../components/MovieCard";
import { getFavoriteMovies } from "../../api/thunks";
import { loadFavorites, loadFavoriteMovies } from "../../selectors";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function Favorites({ favoriteMovies, favorites, getFavoriteMovies }) {
  useEffect(() => {
    getFavoriteMovies();
  }, [favorites]);

  return (
    <div>
      {!favorites.length && <h1>You don&#39;t have any favourites.</h1>}
      {favoriteMovies.loading && <Loading />}
      {favoriteMovies.error && <Error />}
      {favoriteMovies.data && favoriteMovies.data.map((item) => <MovieCard key={item.id} movie={item} />)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  favoriteMovies: loadFavoriteMovies(state),
  favorites: loadFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteMovies: () => dispatch(getFavoriteMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
