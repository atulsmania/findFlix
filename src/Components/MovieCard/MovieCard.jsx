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
      <h4>{movie.title}</h4>
      <span>{movie.release_date.slice(0, 4)}</span>
    </div>
  );
};

export default MovieCard;
