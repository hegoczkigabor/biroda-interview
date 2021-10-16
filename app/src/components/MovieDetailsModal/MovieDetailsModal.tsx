import { useEffect, useState } from "react";

import MovieService from "services/MovieService";

import { MoviePoster } from "components/MoviePoster/MoviePoster";
import { MovieDetails } from "models/MovieDetails";
import { Modal } from "components/Modal/Modal";
import { Link } from "components/Link/Link";
import { Movie } from "models/Movie";

import {
  DialogBodyLeft,
  DialogBodyRight,
  MovieLinks,
  MovieOverview,
} from "./MovieDetailsModalLayout";

export interface MoviedetailsDialogProps {
  movie: Movie | null;
  onClose: () => void;
}

export const MovieDetailsModal = ({
  movie,
  onClose,
}: MoviedetailsDialogProps) => {
  const [visible, setVisible] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>();

  const fetchMovieDetails = async (id: string) => {
    setVisible(true);
    setMovieDetails(await MovieService.getMovieDetails(id));
  };

  useEffect(() => {
    if (movie) {
      fetchMovieDetails(movie.id);
    }
  }, [movie]);

  return (
    <Modal
      title={movieDetails ? movieDetails.title : "Collecting data..."}
      visible={visible}
      onClose={() => {
        setMovieDetails(null);
        setVisible(false);
        onClose();
      }}
    >
      {movieDetails ? (
        <>
          <DialogBodyLeft>
            <MoviePoster posterPath={movieDetails.posterPath} />
          </DialogBodyLeft>
          <DialogBodyRight>
            <MovieOverview>
              {movieDetails.overview ||
                "Overview is not available for this movie."}
            </MovieOverview>
            <MovieLinks>
              <Link
                label="IMDB page"
                icon="externalLink"
                openNewTab={true}
                url={movieDetails.imdbPageUrl}
              />
              <Link
                label="Wikipedia page"
                icon="externalLink"
                openNewTab={true}
                url={movieDetails.wikiPageUrl}
              />
            </MovieLinks>
          </DialogBodyRight>
        </>
      ) : (
        <>Loading...</>
      )}
    </Modal>
  );
};
