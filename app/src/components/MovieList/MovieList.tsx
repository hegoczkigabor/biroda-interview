import { FC, useEffect, useState } from "react";

import { Movie } from "models/Movie";
import { MovieItem } from "../MovieItem/MovieItem";
import { MovieListContainer } from "./MovieListLayout";

export interface MovieListProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export const MovieList: FC<MovieListProps> = ({ movies, onSelect }) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  useEffect(() => {
    setMovieList(movies);
  }, [movies]);
  return (
    <MovieListContainer>
      {movieList.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onClick={() => {
            onSelect(movie);
          }}
        />
      ))}
    </MovieListContainer>
  );
};
