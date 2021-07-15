import React, { useState, useEffect, useContext } from "react";
import { MovieCard } from "..";
import { FavouritesContext } from "../../context";
import styles from "./FavMovies.module.scss";
import getMovieDetails from "../../api/getMovieDetails";

function FavMovies() {
  const [favArr, setFavArr] = useState(null);
  const [favourites] = useContext(FavouritesContext);

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

export default FavMovies;
