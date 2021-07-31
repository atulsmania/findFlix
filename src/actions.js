import {
  ADD_FAV,
  REMOVE_FAV,
  MOVIES_LOADING,
  MOVIES_LOADING_SUCCESS,
  MOVIES_LOADING_FAILURE,
  MOVIEDETAILS_LOADING,
  MOVIEDETAILS_LOADING_SUCCESS,
  MOVIEDETAILS_LOADING_FAILURE,
} from "./actionTypes";

const addToFav = (id) => ({
  type: ADD_FAV,
  payload: id,
});

const removeFromFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

const moviesLoading = () => {
  return {
    type: MOVIES_LOADING,
  };
};

const moviesLoadingSuccess = (movies) => {
  return {
    type: MOVIES_LOADING_SUCCESS,
    data: movies,
  };
};

const moviesLoadingFailure = (error) => {
  return {
    type: MOVIES_LOADING_FAILURE,
    error: error,
  };
};

const movieDetailsLoading = () => {
  return {
    type: MOVIEDETAILS_LOADING,
  };
};

const movieDetailsLoadingSuccess = (movies) => {
  return {
    type: MOVIEDETAILS_LOADING_SUCCESS,
    data: movies,
  };
};

const movieDetailsLoadingFailure = (error) => {
  return {
    type: MOVIEDETAILS_LOADING_FAILURE,
    error: error,
  };
};

export const actions = {
  addToFav,
  removeFromFav,
  movieDetailsLoading,
  movieDetailsLoadingSuccess,
  movieDetailsLoadingFailure,
  moviesLoading,
  moviesLoadingSuccess,
  moviesLoadingFailure,
};
