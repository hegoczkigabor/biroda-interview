import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../config/config";

const fetchGenres = async () =>
  (<any>(
    await axios(`${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`)
  )).data.genres;

export default { fetchGenres };
