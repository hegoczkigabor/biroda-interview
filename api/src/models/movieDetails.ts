import { Movie } from "./movie";

export interface MovieDetails extends Movie {
  overview: string;
  imdbPageUrl: string;
  wikiPageUrl: string;
}
