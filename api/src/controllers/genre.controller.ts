import GenreService from "../services/genre.service";

interface GenreMap {
  [genreId: string]: string;
}

const genreMap: GenreMap = {};

const getMovieGenres = async () => {
  const genres = await GenreService.fetchGenres();
  for (const genre of genres) {
    genreMap[genre.id] = genre.name;
  }
};

const mapMovieGenreIdsToLabels = (genreIds: string[]) =>
  genreIds.map((genreId) => genreMap[genreId]);

export default { getMovieGenres, mapMovieGenreIdsToLabels };
