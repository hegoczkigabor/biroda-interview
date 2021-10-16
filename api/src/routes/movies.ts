import { Router } from "express";
import movieController from "../controllers/movieController";

const moviesRouter = Router();

const { getMoviesByTitle, getPopularMovies, getMovieDetailsByMovieId } =
  movieController;

moviesRouter.get("/find", async (request, response) => {
  try {
    const title = request.query.title as string;
    response.json(await getMoviesByTitle(title));
  } catch (e) {
    response.json("Error");
  }
});

moviesRouter.get("/popular", async (request, response) => {
  try {
    response.json(await getPopularMovies());
  } catch (e) {
    response.json("Error");
  }
});

moviesRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    response.json(await getMovieDetailsByMovieId(id));
  } catch (e) {
    response.json("Error");
  }
});

export default moviesRouter;
