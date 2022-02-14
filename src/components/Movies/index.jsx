import React from "react";
import { useHistory } from "react-router-dom";
import { MovieCard, Buttons } from "components";
import styles from "components/Movies/styles.module.scss";

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
