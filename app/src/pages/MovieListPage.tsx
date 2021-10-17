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
  MainContent,
  MessageContainer,
} from "./MovieListPageLayout";

export const MovieListPage = () => {
  const [result, setResult] = useState<any>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const findMoviesByTitle = async (title: string) => {
    const result =
      title === ""
        ? await MovieService.getPopularMovies()
        : await MovieService.getMoviesByTitle(title);
    setResult(result);
  };
  useEffect(() => {
    findMoviesByTitle("");
  }, []);
  return (
    <>
      <MovieDetailsModal
        movieId={selectedMovie?.id}
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
          {result ? (
            result.data ? (
              <MovieList
                movies={result.data}
                onSelect={(movie: Movie) => setSelectedMovie(movie)}
              />
            ) : (
              <MessageContainer>{result.error.message}</MessageContainer>
            )
          ) : (
            <MessageContainer>Collecting data...</MessageContainer>
          )}
        </MainContent>
      </Main>
    </>
  );
};
