import React from "react";
import { Navbar, Home, MovieDetails, FavMovies } from "./Components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MoviesContextProvider from "./context/MoviesContext";
import FavouritesContextProvider from "./context/FavouritesContext";
import "./styles.css";

function App() {
  return (
    <MoviesContextProvider>
      <FavouritesContextProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/favourites">
                <FavMovies />
              </Route>

              <Route exact path="/details/:id">
                <MovieDetails />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </FavouritesContextProvider>
    </MoviesContextProvider>
  );
}

export default App;
