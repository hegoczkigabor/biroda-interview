const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getMoviesByTitle = async (title: string) => {
  const response = await fetch(
    `${BASE_URL}/movies/find?title=${title}`
  );
  return await response.json();
};

const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies/popular`);
  return await response.json();
};

const getMovieDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  return await response.json();
};

export default { getMoviesByTitle, getPopularMovies, getMovieDetails };
