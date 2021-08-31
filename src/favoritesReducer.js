import { ADD_FAV, REMOVE_FAV } from "./actionTypes";

export function favoriteMoviesReducer (favorites = [], action) {
  switch (action.type) {
    case ADD_FAV:
      return [...favorites, action.payload];

    case REMOVE_FAV:
      return favorites.filter((movieId) => !(movieId === action.payload));

    default:
      return favorites;
  }
}
