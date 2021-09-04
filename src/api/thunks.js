import { actions } from "../actions/actions";

const API_KEY = "670303602e5e5bcf8eb83062ba3f715e";

// *get Movie Details
export const getMovieDetails = (movieId) => (dispatch) => {
  dispatch(actions.movieDetailsLoading());
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => dispatch(actions.movieDetailsLoadingSuccess(data)))
    .catch((e) => dispatch(actions.movieDetailsLoadingFailure(e)));
};

// *get Popular Movies Database
export const getMovieDatabase = ({ catagory, page }) => (dispatch) => {
  dispatch(actions.moviesLoading());
  const URL = `https://api.themoviedb.org/3/movie/${catagory}?api_key=${API_KEY}&language=en-US&page=${page}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => dispatch(actions.moviesLoadingSuccess(data)))
    .catch((e) => dispatch(actions.moviesLoadingFailure(e)));
};

// *get Popular Movies Database
export const getFavoriteMovies = () => (dispatch, getState) => {
  dispatch(actions.favoriteMoviesLoading());
  Promise.all(getState().favorites.map(movieID => {
    const URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
    return fetch(URL).then(res => res.json())
  }))
    .then((data) => dispatch(actions.favoriteMoviesLoadingSuccess(data)))
    .catch((e) => dispatch(actions.favoriteMoviesLoadingFailure(e)));
};