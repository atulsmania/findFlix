import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
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
      <Navbar />
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/:catagory?/:page?" element={<MoviesPage />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
