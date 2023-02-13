const axios = require("axios");

const Category = {
  TOP_RATED: "/top_rated",
  UP_COMING: "/upcoming",
  NOW_PLAYING: "/now_playing",
  POPULAR: "/popular",
};

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  params: {
    language: "en-US",
    api_key: process.env.API_KEY,
  },
});

module.exports = async function handler(req, res) {
  const { category, page = 1 } = req.query;

  const isCategory = Object.values(Category).some(
    (cat) => cat.slice(1) === category
  );
  try {
    const movies = await getMovieDetails(
      category,
      isCategory ? page : undefined
    );
    res.status(200).json({
      movies,
    });
  } catch (e) {
    res.json({
      status: e.status,
      msg: e.message,
    });
  }
};

const getMovieDetails = async (movieId, page) => {
  const res = await axiosInstance.post(`/${movieId}`, undefined, {
    params: { page },
  });
  return res.data;
};
