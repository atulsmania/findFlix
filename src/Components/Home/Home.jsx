import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Home.module.scss";
import { MoviesContext } from "../../context/MoviesContext";
import { useHistory } from "react-router-dom";

function Home() {
  const [movies, page] = useContext(MoviesContext);
  const history = useHistory();

  return (
    <>
      <div className={styles.container}>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => history.push(`/${page - 1}`)}
          disabled={page <= 1}
        >
          prev
        </button>
        <h2>{page}</h2>
        <button onClick={() => history.push(`/${page + 1}`)}>next</button>
      </div>
    </>
  );
}

export default Home;
