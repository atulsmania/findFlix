import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Home.module.scss";
import { useHistory } from "react-router-dom";

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
        <button
          onClick={() => history.push(`/${catagory}/${page - 1}`)}
          disabled={page <= 1}
        >
          prev
        </button>
        <h2>{page}</h2>
        <button onClick={() => history.push(`/${catagory}/${page + 1}`)}>
          next
        </button>
      </div>
    </>
  );
};

export default Home;
