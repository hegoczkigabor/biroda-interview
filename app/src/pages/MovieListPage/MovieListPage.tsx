import { useEffect, useState } from "react";

import MovieService from "services/MovieService";

import { Movie } from "models/Movie";
import { Search } from "components/Search/Search";
import { MovieList } from "components/MovieList/MovieList";
import { MovieDetailsModal } from "components/MovieDetailsModal/MovieDetailsModal";

import {
  Main,
  Header,
  HeaderContent,
  MainContent
} from "./MovieListPageLayout";

export const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const findMoviesByTitle = async (title: string) => {
    const movies =
      title === ""
        ? await MovieService.getPopularMovies()
        : await MovieService.getMoviesByTitle(title);
    setMovies(movies);
  };
  useEffect(() => {
    findMoviesByTitle("");
  }, []);
  return (
    <>
      <MovieDetailsModal
        movie={selectedMovie}
        onClose={() => {
          setSelectedMovie(null);
        }}
      />
      <Header>
        <HeaderContent>
          <div>MovieFinder</div>
          <Search
            placeholder="Start typing to find a movie..."
            onSearch={(searchValue: string) => findMoviesByTitle(searchValue)}
          />
        </HeaderContent>
      </Header>
      <Main>
        <MainContent>
          <MovieList
            movies={movies}
            onSelect={(movie: Movie) => setSelectedMovie(movie)}
          />
        </MainContent>
      </Main>
    </>
  );
};
