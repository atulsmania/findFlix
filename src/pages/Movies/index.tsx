import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";

const Movies = () => {
  const location = useLocation();
  const { category } = useParams();
  // const {} = useQuery([category])

  console.log({ location });

  return <div>Movies {category}</div>;
};

export default Movies;
