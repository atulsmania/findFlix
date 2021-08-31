import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./FavMovies.module.scss";
import { getMovieDetails } from "../../thunks";
import { loadFavorites } from "../../selectors";

function FavMovies({ favorites }) {
  const [favArr, setFavArr] = useState(null);

  useEffect(() => {
    Promise.all(favorites.map((id) => getMovieDetails(id))).then((res) => setFavArr(res));
  }, [favorites]);

  return (
    <div className={styles.container}>
      {favorites.length <= 0 ? (
        <h1 className={styles.emptylist}>You don&lsquot have any favourites.</h1>
      ) : (
        favArr && favArr.map((item) => <MovieCard key={item.id} movie={item} />)
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorites: loadFavorites(state),
});

export default connect(mapStateToProps, null)(FavMovies);
