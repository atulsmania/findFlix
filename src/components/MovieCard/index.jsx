import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const MovieCard = ({ movie }) => {
  const IMAGE_URL = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <div className={styles.movies}>
      <Link to={`/details/${movie.id}`}>
        <div className={styles.imageContainer}>
          <img loading="lazy" src={IMAGE_URL} alt={`${movie.title}_image`} />
        </div>
      </Link>
      <h4 className={styles.movieTitle}>{movie.title}</h4>
      <span>{movie.release_date ? movie.release_date.slice(0, 4) : "TBD"}</span>
    </div>
  );
};

export default MovieCard;
