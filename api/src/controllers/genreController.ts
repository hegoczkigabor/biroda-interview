import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../config/config";

const genreMap: any = {};

const getMovieGenres = async () => {
  const { data } = await axios(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`
  );
  const genres = (<any>data).genres;
  for (let genre of genres) {
    genreMap[genre.id] = genre.name;
  }
};

const mapMovieGenreIdsToLabels = (genreIds: string[]) =>
  genreIds.map((genreId) => genreMap[genreId]);

export default { getMovieGenres, mapMovieGenreIdsToLabels };
