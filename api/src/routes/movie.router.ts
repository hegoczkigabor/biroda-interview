import { Router } from "express";
import movieController from "../controllers/movie.controller";

const moviesRouter = Router();

moviesRouter.get("/find", async (request, response) =>
  response.json(
    await movieController.getMoviesByTitle(request.query.title as string)
  )
);

moviesRouter.get("/popular", async (request, response) =>
  response.json(await movieController.getPopularMovies())
);

moviesRouter.get("/:id", async (request, response) =>
  response.json(
    await movieController.getMovieDetailsByMovieId(request.params.id)
  )
);

export default moviesRouter;