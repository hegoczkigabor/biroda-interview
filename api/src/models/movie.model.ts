export interface Movie {
  id: string;
  title: string;
  posterPath: string;
  genres: string[];
  year: string;
  score: string;
}

export interface MovieDetails extends Movie {
  overview: string;
  imdbPageUrl: string;
  wikiPageUrl: string;
}
