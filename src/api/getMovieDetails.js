async function getMovieDetails(movieId) {
  const api_key = "670303602e5e5bcf8eb83062ba3f715e";
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`;
  return (await fetch(URL)).json();
}

export default getMovieDetails;
