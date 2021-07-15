async function getMovieDatabase(page) {
    const api_key = '4e44d9029b1270a757cddc766a1bcb63';
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`;
    return (await fetch(URL)).json();
}

export default getMovieDatabase;