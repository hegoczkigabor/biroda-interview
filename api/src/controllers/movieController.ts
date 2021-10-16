import axios from "axios";
import genreController from "./genreController";
import imdbController from "./imdbController";
import wikipediaController from "./wikipediaController";

import { TMDB_API_KEY, TMDB_BASE_URL } from "../config/config";

const { mapMovieGenreIdsToLabels } = genreController;
const { getImdbMoviePageUrlById } = imdbController;
const { getWikipediaPageUrlByMovieTitle, getWikipediaOverviewByMovieTitle } =
  wikipediaController;

const getMoviesByTitle = async (title: string) => {
  const { data } = await axios(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
  );
  return (<any>data).results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    year: movie.release_date,
    score: movie.vote_average,
    genres: mapMovieGenreIdsToLabels(movie.genre_ids),
  }));
};

const getPopularMovies = async () => {
  const { data } = await axios(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
  );
  return (<any>data).results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    year: movie.release_date,
    score: movie.vote_average,
    genres: mapMovieGenreIdsToLabels(movie.genre_ids),
  }));
};

const getMovieDetailsByMovieId = async (id: string) => {
  const { data } = await axios(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`
  );
  const movie = <any>data;
  return {
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    year: movie.release_date,
    score: movie.vote_average,
    imdbPageUrl: getImdbMoviePageUrlById(movie.imdb_id),
    wikiPageUrl: getWikipediaPageUrlByMovieTitle(movie.title),
    overview: await getWikipediaOverviewByMovieTitle(movie.title),
  };
};

export default { getMoviesByTitle, getPopularMovies, getMovieDetailsByMovieId };
