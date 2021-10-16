import { FC } from "react";

const defaultImageUrl = "images/movie-cover-default.png";

export interface MoviePosterProps {
  posterPath?: string;
}

export const MoviePoster: FC<MoviePosterProps> = ({ posterPath }) => {
  return posterPath ? (
    <img
      src={`https://www.themoviedb.org/t/p/w185_and_h278_bestv2/${posterPath}`}
    />
  ) : (
    <img width="185px" height="278px" src={defaultImageUrl} />
  );
};
