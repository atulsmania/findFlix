import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ movie }) => {
  const URL = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <div className={styles.movies}>
      <Link to={`/details/${movie.id}`}>
        <img src={URL} alt={movie.title + " image"} />
      </Link>
      <h4 className={styles.movieTitle}>{movie.title}</h4>
      <span>{movie.release_date ? movie.release_date.slice(0, 4) : "TBD"}</span>
    </div>
  );
};

export default MovieCard;
