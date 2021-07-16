import React, { useState, useEffect } from "react";
import getMovieDatabase from "../api/getMovieDatabase";
import { useParams } from "react-router";

export const MoviesContext = React.createContext([]);

export default function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState(null);
  const { page = 1 } = useParams();

  useEffect(async () => {
    setMovies(await getMovieDatabase(+page));
  }, [page]);

  return (
    <>
      {movies && (
        <MoviesContext.Provider value={[movies.results, +page]}>
          {children}
        </MoviesContext.Provider>
      )}
    </>
  );
}
