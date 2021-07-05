const express = require("express");

const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");
const ReportMovieController = require("./controllers/ReportMovieController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.post("/auth", UserController.oauth);

routes.get("/users/:user_id/movies", MovieController.index);
routes.post("/users/:user_id/movies", MovieController.store);
routes.delete("/users/:user_id/movies", MovieController.delete);

routes.get("/report", ReportMovieController.show);

module.exports = routes;
