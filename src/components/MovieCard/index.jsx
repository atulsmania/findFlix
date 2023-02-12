import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const IMAGE_URL = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <div className="card w-96 bg-black shadow-xl">
      <figure>
        <img loading="lazy" src={IMAGE_URL} alt={`${movie.title}_image`} />
      </figure>
      <Link to={`/details/${movie.id}`}></Link>
      <h4>{movie.title}</h4>
      <span>{movie.release_date ? movie.release_date.slice(0, 4) : "TBD"}</span>
    </div>
  );
};

export default MovieCard;
