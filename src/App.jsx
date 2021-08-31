import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { configStore } from "./store";
import { Navbar, MovieDetails, FavMovies, PopularMovies, Footer } from "./Components";
import "./styles.css";

function App() {
  return (
    <Provider store={configStore()}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/favorites" component={FavMovies} />
            <Route exact path="/details/:id" component={MovieDetails} />
            <Route exact path="/:catagory?/:page?" component={PopularMovies} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
