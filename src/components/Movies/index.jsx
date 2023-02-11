import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard";
import Buttons from "../Buttons";

const Movies = ({ movies = [], page, catagory }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <Buttons
        previousPage={() => navigate(`/${catagory}/${page - 1}`)}
        currentPage={page}
        nextPage={() => navigate(`/${catagory}/${page + 1}`)}
      />
    </>
  );
};

export default Movies;
