import { FC } from "react";

import { Movie } from "models/Movie";
import { Label } from "components/Label/Label";
import { MoviePoster } from "components/MoviePoster/MoviePoster";

import {
  MovieGenre,
  MovieItemContainer,
  MoviePosterContainer,
  MovieScore,
  MovieTitle,
} from "./MovieItemLayout";
import { Tag } from "components/Tag/Tag";

export interface MovieItemProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export const MovieItem: FC<MovieItemProps> = ({ movie, onClick }) => {
  return (
    <MovieItemContainer onClick={() => onClick(movie)}>
      <MoviePosterContainer>
        <MoviePoster posterPath={movie.posterPath} />
      </MoviePosterContainer>
      <MovieTitle>
        <Label maxLength={20} value={movie.title} />
      </MovieTitle>
      <MovieScore> Score: {movie.score} </MovieScore>
      <MovieGenre>
        {movie.genres.slice(0, 2).map((genre) => (
          <Tag label={genre} />
        ))}
      </MovieGenre>
    </MovieItemContainer>
  );
};
