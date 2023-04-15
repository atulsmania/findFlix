import axios from "axios";
import { QueryFunctionContext } from "react-query";

const axiosInstance = axios.create({
  baseURL: `/api`,
});

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Result {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export enum Category {
  TOP_RATED = "top_rated",
  UP_COMING = "upcoming",
  NOW_PLAYING = "now_playing",
  POPULAR = "popular",
  FAVORITES = "favorites",
  DETAILS = "details",
}

export const getMovies = async ({
  queryKey,
}: QueryFunctionContext<[Category, number]>) => {
  const [category, page] = queryKey;

  const response = await axiosInstance.post<Result>(`/movies`, {
    category,
    page,
  });
  return response.data;
};

export const getDetails = async ({
  queryKey,
}: QueryFunctionContext<[movieId: string]>) => {
  const [movieId] = queryKey;

  const response = await axiosInstance.post<Result>(`/details`, { movieId });
  return response.data;
};
