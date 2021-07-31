import { ADD_FAV, REMOVE_FAV } from "./actionTypes";
/**
 * * Contains Only ids of favourite Movies
 * @type @string
 */

const initiaState = [];

export default function reducer(favourites = initiaState, action) {
  switch (action.type) {
    case ADD_FAV:
      return [...favourites, action.payload];

    case REMOVE_FAV:
      return favourites.filter((movieId) => !(movieId === action.payload));

    default:
      return favourites;
  }
}
