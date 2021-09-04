import React from "react";
import { useHistory } from "react-router-dom";
import Buttons from "../Buttons";
import MovieCard from "../MovieCard";
import styles from "./styles.module.scss";

const Movies = ({ movies = [], page, catagory }) => {
  const history = useHistory();
  return (
    <>
      <div className={styles.container}>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <Buttons
        previousPage={() => history.push(`/${catagory}/${page - 1}`)}
        currentPage={page}
        nextPage={() => history.push(`/${catagory}/${page + 1}`)}
      />
    </>
  );
};

export default Movies;
