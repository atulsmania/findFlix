import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "components/MovieCard";
import { getFavoriteMovies } from "api/thunks";
import { loadFavorites, loadFavoriteMovies } from "selectors";
import { Loading, Error } from "components";
import styles from "containers/Favorites/styles.module.scss";

function Favorites({ favoriteMovies, favorites, getFavoriteMovies }) {
  useEffect(() => {
    getFavoriteMovies();
  }, [favorites]);

  return (
    <div className={styles.container}>
      {!favorites.length && <h1 className={styles.emptylist}>You don&#39;t have any favourites.</h1>}
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
