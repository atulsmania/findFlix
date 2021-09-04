import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { favoriteMoviesReducer, fetchFavoriteMoviesReducer } from "./reducers/favoritesReducer";
import { fetchMovieDetailsReducer, fetchMoviesReducer } from "./reducers/moviesReducer";

const rootReducer = combineReducers({
    favorites: favoriteMoviesReducer,
    favoriteMovies: fetchFavoriteMoviesReducer,
    movies: fetchMoviesReducer,
    movieDetails: fetchMovieDetailsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const configStore = () => store;
