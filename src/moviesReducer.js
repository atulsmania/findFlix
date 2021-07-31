import {
  MOVIEDETAILS_LOADING,
  MOVIEDETAILS_LOADING_SUCCESS,
  MOVIEDETAILS_LOADING_FAILURE,
  MOVIES_LOADING,
  MOVIES_LOADING_SUCCESS,
  MOVIES_LOADING_FAILURE,
} from "./actionTypes";

const moviesInitialState = {
  loading: false,
  data: null,
  error: null,
};

// * for movies
export const fetchMoviesReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case MOVIES_LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case MOVIES_LOADING_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };

    case MOVIES_LOADING_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
};

const movieDetailsInitialState = {
  loading: false,
  data: null,
  error: null,
};

// * for movies details
export const fetchMovieDetailsReducer = (
  state = movieDetailsInitialState,
  action
) => {
  switch (action.type) {
    case MOVIEDETAILS_LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case MOVIEDETAILS_LOADING_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };

    case MOVIEDETAILS_LOADING_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
};
