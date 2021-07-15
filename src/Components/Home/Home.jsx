import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Home.module.scss";
import { MoviesContext } from "../../context/MoviesContext";

function Home() {
  const [movies, page, setPage] = useContext(MoviesContext);
  return (
    <>
      <div className={styles.container}>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
          prev
        </button>
        <h2>{page}</h2>
        <button onClick={() => setPage(page + 1)}>next</button>
      </div>
    </>
  );
}

export default Home;
