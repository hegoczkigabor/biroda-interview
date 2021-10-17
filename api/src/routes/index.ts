import { Router } from "express";
import movieRouter from "./movie.router";

const routes = Router();
routes.use("/movies", movieRouter);

export default routes;
