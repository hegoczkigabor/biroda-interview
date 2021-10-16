import { Movie } from "./Movie";

export interface MovieDetails extends Movie{
  overview: string;
  wikiPageUrl: string;
  imdbPageUrl: string;
}
