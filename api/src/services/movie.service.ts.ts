import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../config/config";

const fetchMoviesByTitle = async (title: string) => {
  const { data } = await axios(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
  );
  return data;
};

const fetchPopularMovies = async () => {
  const { data } = await axios(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
  );
  return data;
};

const fetchMovieDetailsById = async (id: string) => {
  const { data } = await axios(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`
  );
  return data;
};

export default {
  fetchMoviesByTitle,
  fetchPopularMovies,
  fetchMovieDetailsById,
};
