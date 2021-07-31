import React, { useState, useEffect } from "react";
import { MovieCard } from "..";
import styles from "./FavMovies.module.scss";
import getMovieDetails from "../../api/getMovieDetails";
import { connect } from "react-redux";
import { loadFavourites } from "../../selectors";

function FavMovies({ favourites }) {
  const [favArr, setFavArr] = useState(null);

  useEffect(() => {
    Promise.all(favourites.map((id) => getMovieDetails(id))).then((res) =>
      setFavArr(res)
    );
  }, [favourites]);

  return (
    <div className={styles.container}>
      {favourites.length <= 0 ? (
        <h1 className={styles.emptylist}>You don't have any favourites.</h1>
      ) : (
        favArr && favArr.map((item) => <MovieCard key={item.id} movie={item} />)
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  favourites: loadFavourites(state),
});

export default connect(mapStateToProps, null)(FavMovies);
