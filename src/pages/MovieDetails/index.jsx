import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { getMovieDetails } from "../../api/thunks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { actions } from "../../actions/actions";
import { loadMovieDetails, loadFavorites } from "../../selectors";

function MovieDetails({ movieDetails, favorites, getMovieDetails }) {
  const { id } = useParams();
  const isFav = favorites.includes(id);

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  return (
    <div>
      {movieDetails.loading && <Loading />}
      {movieDetails.data && <ConnectedMovie movie={movieDetails.data} movieID={id} isFav={isFav} />}
      {movieDetails.error && <Error />}
    </div>
  );
}

const Movie = ({ movie, addToFav, removeFromFav, movieID, isFav }) => {
  const dispatchFunction = isFav ? removeFromFav : addToFav;
  const imageURL = "https://image.tmdb.org/t/p/w342";
  const navigate = useNavigate();

  return (
    <>
      <div>
        <img src={imageURL + movie.poster_path} alt={movie.original_title} />
      </div>
      <div>
        <IoArrowBackCircleOutline onClick={() => navigate(-1)} />
        <h1>{movie.title}</h1>
        <div>
          <h6>lang : {movie.original_language}</h6>
          <h6>rating : {movie.vote_average}</h6>
          <h6>Released On : {movie.release_date}</h6>
        </div>
        <div>
          {movie.genres.map(({ name, id }) => (
            <h4 key={id}>{name}</h4>
          ))}
        </div>
        <p>{movie.overview}</p>
        <MdFavorite onClick={() => dispatchFunction(movieID)} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  favorites: loadFavorites(state),
  movieDetails: loadMovieDetails(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (id) => dispatch(actions.addToFav(id)),
  removeFromFav: (id) => dispatch(actions.removeFromFav(id)),
  getMovieDetails: (id) => dispatch(getMovieDetails(id)),
});

const ConnectedMovie = connect(mapStateToProps, mapDispatchToProps)(Movie);
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
