import React from "react";
import { useHistory } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Home.module.scss";

const Home = ({ movies = [], page, catagory }) => {
  const history = useHistory();
  return (
    <>
      <div className={styles.container}>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button type="button" onClick={() => history.push(`/${catagory}/${page - 1}`)} disabled={page <= 1}>
          prev
        </button>
        <h2>{page}</h2>
        <button type="button" onClick={() => history.push(`/${catagory}/${page + 1}`)}>
          next
        </button>
      </div>
    </>
  );
};

export default Home;
