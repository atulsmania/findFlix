import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { getMovieDetails } from "../../thunks";
import { connect } from "react-redux";
import { actions } from "../../actions";
import styles from "./MovieDetails.module.scss";
import { loadMovieDetails, loadFavourites } from "../../selectors";

function MovieDetails({ movieDetails, favourites, getMovieDetails }) {
  const { id } = useParams();
  const isFav = favourites.includes(id);

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  return (
    <div className={styles.container}>
      {movieDetails.loading ? (
        <Loading />
      ) : movieDetails.data ? (
        <ConnectedMovie movie={movieDetails.data} id={id} isFav={isFav} />
      ) : (
        <Error />
      )}
    </div>
  );
}

const Movie = ({ movie, addToFav, removeFromFav, id, isFav }) => {
  const dispatchFunction = isFav ? removeFromFav : addToFav;
  const imageURL = `https://image.tmdb.org/t/p/w342`;
  const history = useHistory();
  return (
    <>
      <div className={styles.poster}>
        <img src={imageURL + movie.poster_path} alt={movie.original_title} />
      </div>
      <div className={styles.movieDetails}>
        <button className={styles.backbtn} onClick={() => history.goBack()}>
          <i className="material-icons-outlined">keyboard_backspace</i>
        </button>
        <h1>{movie.title}</h1>
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
        <button onClick={() => dispatchFunction(id)}>
          {isFav ? "remove from favourites" : "add to favourites"}
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  favourites: loadFavourites(state),
  movieDetails: loadMovieDetails(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (id) => dispatch(actions.addToFav(id)),
    removeFromFav: (id) => dispatch(actions.removeFromFav(id)),
    getMovieDetails: (id) => dispatch(getMovieDetails(id)),
  };
};

const ConnectedMovie = connect(mapStateToProps, mapDispatchToProps)(Movie);
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
