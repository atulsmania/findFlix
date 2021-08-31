import {
  MOVIE_DETAILS_LOADING,
  MOVIE_DETAILS_LOADING_SUCCESS,
  MOVIE_DETAILS_LOADING_FAILURE,
  MOVIES_LOADING,
  MOVIES_LOADING_SUCCESS,
  MOVIES_LOADING_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// * for movies
export const fetchMoviesReducer = (state = initialState, action) => {
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

// * for movies details
export const fetchMovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case MOVIE_DETAILS_LOADING_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };

    case MOVIE_DETAILS_LOADING_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
};
