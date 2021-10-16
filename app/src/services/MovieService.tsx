const getMoviesByTitle = async (title: string) => {
  const response = await fetch(
    `http://localhost:5000/movies/find?title=${title}`
  );
  return await response.json();
};

const getPopularMovies = async () => {
  const response = await fetch(`http://localhost:5000/movies/popular`);
  return await response.json();
};

const getMovieDetails = async (id: string) => {
  const response = await fetch(`http://localhost:5000/movies/${id}`);
  return await response.json();
};

export default { getMoviesByTitle, getPopularMovies, getMovieDetails };
