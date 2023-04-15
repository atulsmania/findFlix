const axios = require("axios");

const endpoints = {
  movies: "movies",
  details: "details",
};

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  params: {
    language: "en-US",
    api_key: process.env.API_KEY,
  },
});

module.exports = async function handler(req, res) {
  const { subUrl } = req.query;

  try {
    const data = await getHandler(subUrl)(req.body);
    res.status(200).json(data);
  } catch (e) {
    res.json({
      status: e.status,
      msg: e.message,
    });
  }
};

const getHandler = (endpoint) => {
  switch (endpoint) {
    case endpoints.movies:
      return getMovies;
    case endpoints.details:
      return getMovieDetails;
  }
};

const getMovies = async ({ category, page = 1 }) => {
  const res = await axiosInstance.post(`/movie/${category}`, undefined, {
    params: { page },
  });
  return res.data;
};

const getMovieDetails = async ({ movieId }) => {
  const res = await axiosInstance.get(`/movie/${movieId}`);
  return res.data;
};
