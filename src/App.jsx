import React from "react";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { configStore } from "./store";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favorites from "./containers/Favorites";
import MoviesPage from "./containers/MoviesPage";
import MovieDetails from "./containers/MovieDetails";
import "./styles.css";

function App() {
  return (
    <Provider store={configStore()}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/favorites" component={Favorites} />
              <Route exact path="/details/:id" component={MovieDetails} />
              <Route exact path="/:catagory?/:page?" component={MoviesPage} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
