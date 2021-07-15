import React, { useState, useEffect } from "react";
import getMovieDatabase from "../api/getMovieDatabase";

export const MoviesContext = React.createContext([]);

export default function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    setMovies(await getMovieDatabase(page));
  }, [page]);

  return (
    <>
      {movies && (
        <MoviesContext.Provider value={[movies.results, page, setPage]}>
          {children}
        </MoviesContext.Provider>
      )}
    </>
  );
}
