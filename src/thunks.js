import { actions } from "./actions";

const api_key = "670303602e5e5bcf8eb83062ba3f715e";

// *get Movie Details
export const getMovieDetails = (movieId) => async (dispatch, getState) => {
  dispatch(actions.movieDetailsLoading());
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => dispatch(actions.movieDetailsLoadingSuccess(data)))
    .catch((e) => dispatch(actions.movieDetailsLoadingFailure(e)));
};

// *get Popular Movies Database
export const getMovieDatabase =
  ({ catagory, page }) =>
  async (dispatch, getState) => {
    dispatch(actions.moviesLoading());
    const URL = `https://api.themoviedb.org/3/movie/${catagory}?api_key=${api_key}&language=en-US&page=${page}`;
    console.log(URL);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => dispatch(actions.moviesLoadingSuccess(data)))
      .catch((e) => dispatch(actions.moviesLoadingFailure(e)));
  };
