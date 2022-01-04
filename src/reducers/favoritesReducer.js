import {
  ADD_FAV,
  FAVORITE_MOVIES_LOADING,
  FAVORITE_MOVIES_LOADING_FAILURE,
  FAVORITE_MOVIES_LOADING_SUCCESS,
  REMOVE_FAV,
} from "constants/actionTypes";

export const favoriteMoviesReducer = (favorites = [], action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...favorites, action.payload];

    case REMOVE_FAV:
      return favorites.filter((movieId) => !(movieId === action.payload));

    default:
      return favorites;
  }
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// * for favorite movies
export const fetchFavoriteMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_MOVIES_LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case FAVORITE_MOVIES_LOADING_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };

    case FAVORITE_MOVIES_LOADING_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
};
