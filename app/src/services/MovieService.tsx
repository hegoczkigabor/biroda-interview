const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const fetchData = async (url: string) => {
  try {
    return await (await fetch(url)).json();
  } catch {
    return {
      error: {
        code: "CONNECTION_REFUSED",
        message: "Network error. Please try again.",
      },
    };
  }
};

const getMoviesByTitle = async (title: string) =>
  fetchData(`${BASE_URL}/movies/find?title=${title}`);

const getPopularMovies = async () => fetchData(`${BASE_URL}/movies/popular`);

const getMovieDetails = async (id: string) =>
  fetchData(`${BASE_URL}/movies/${id}`);

export default { getMoviesByTitle, getPopularMovies, getMovieDetails };
