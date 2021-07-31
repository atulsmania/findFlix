import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./favouritesReducer";
import { fetchMovieDetailsReducer, fetchMoviesReducer } from "./moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  favourites: reducer,
  movies: fetchMoviesReducer,
  movieDetails: fetchMovieDetailsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const configStore = () => store;
