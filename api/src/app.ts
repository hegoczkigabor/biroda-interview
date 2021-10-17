import express from "express";
import cors from "cors";

import routes from "./routes";
import { PORT } from "./config/config";
import genreController  from "./controllers/genre.controller";

const app = express();

app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
  genreController.getMovieGenres();
});
