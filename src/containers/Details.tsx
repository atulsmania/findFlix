import { getDetails, getMovies } from "@/api";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { movieId } = useParams();
  const { data, isFetched } = useQuery([movieId!], getDetails);

  return <div>Details</div>;
};

export default Details;
