import genreController from "./genre.controller";
import imdbController from "./imdb.controller";
import wikipediaController from "./wikipedia.controller";

import movieService from "../services/movie.service.ts";

const { mapMovieGenreIdsToLabels } = genreController;
const { getImdbMoviePageUrlById } = imdbController;
const { getWikipediaPageUrlByMovieTitle, getWikipediaOverviewByMovieTitle } =
  wikipediaController;

const getMoviesByTitle = async (title: string) => {
  try {
    const data = await movieService.fetchMoviesByTitle(title);
    return {
      data: (<any>data).results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        year: movie.release_date,
        score: movie.vote_average,
        genres: mapMovieGenreIdsToLabels(movie.genre_ids),
      })),
    };
  } catch {
    return {
      error: {
        code: "500",
        message: "Error while searching for movies.",
      },
    };
  }
};

const getPopularMovies = async () => {
  try {
    const data = await movieService.fetchPopularMovies();
    return {
      data: (<any>data).results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        year: movie.release_date,
        score: movie.vote_average,
        genres: mapMovieGenreIdsToLabels(movie.genre_ids),
      })),
    };
  } catch {
    return {
      error: {
        code: "500",
        message: "Error while fetching popular movies.",
      },
    };
  }
};

const getMovieDetailsByMovieId = async (id: string) => {
  try {
    const movie = <any>await movieService.fetchMovieDetailsById(id);
    return {
      data: {
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        year: movie.release_date,
        score: movie.vote_average,
        imdbPageUrl: getImdbMoviePageUrlById(movie.imdb_id),
        wikiPageUrl: getWikipediaPageUrlByMovieTitle(movie.title),
        overview: await getWikipediaOverviewByMovieTitle(movie.title),
      },
    };
  } catch {
    return {
      error: {
        code: "500",
        message: "Error while fetching movie details.",
      },
    };
  }
};

export default { getMoviesByTitle, getPopularMovies, getMovieDetailsByMovieId };
