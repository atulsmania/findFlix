import React from "react";
import { Navbar, Home, MovieDetails, FavMovies } from "./Components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MoviesContextProvider, FavouritesContextProvider } from "./context";
import "./styles.css";

function App() {
  return (
    <FavouritesContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/favourites" component={FavMovies} />

            <Route exact path="/details/:id" component={MovieDetails} />

            <Route path="/:page?">
              <MoviesContextProvider>
                <Home />
              </MoviesContextProvider>
            </Route>
          </Switch>
        </Router>
      </div>
    </FavouritesContextProvider>
  );
}

export default App;
