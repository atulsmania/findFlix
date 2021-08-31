import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { favoriteMoviesReducer } from "./favoritesReducer";
import { fetchMovieDetailsReducer, fetchMoviesReducer } from "./moviesReducer";

const rootReducer = combineReducers({
  favorites: favoriteMoviesReducer,
  movies: fetchMoviesReducer,
  movieDetails: fetchMovieDetailsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const configStore = () => store;
