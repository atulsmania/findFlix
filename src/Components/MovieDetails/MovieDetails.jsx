import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.scss";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../context";
import getMovieDetails from "../../api/getMovieDetails";

function MovieDetails() {
  const [movie, setmovie] = useState(null);
  const [favourites, dispatch] = useContext(FavouritesContext);
  const { id } = useParams();
  const isFav = favourites.includes(id);

  const imageURL = `https://image.tmdb.org/t/p/w342`;
  const dispatchObj = {
    type: isFav ? "remove" : "add",
    payload: id,
  };

  useEffect(async () => {
    setmovie(await getMovieDetails(id));
  }, []);

  return (
    <div className={styles.container}>
      {movie && (
        <>
          <div className={styles.poster}>
            <img
              src={imageURL + movie.poster_path}
              alt={movie.original_title}
            />
          </div>
          <div className={styles.movieDetails}>
            <h1>{movie.original_title}</h1>
            <div className={styles.rating}>
              <h6>lang : {movie.original_language}</h6>
              <h6>rating : {movie.vote_average}</h6>
              <h6>Released On : {movie.release_date}</h6>
            </div>
            <div className={styles.genres}>
              {movie.genres.map(({ name, id }) => (
                <h4 key={id}>{name}</h4>
              ))}
            </div>
            <p>{movie.overview}</p>
            <Link to="/">
              <button>back</button>
            </Link>
            <button onClick={() => dispatch(dispatchObj)}>
              {isFav ? "remove from favourites" : "add to favourites"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
