const express = require("express");

const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/movies", MovieController.index);
routes.post("/users/:user_id/movies", MovieController.store);
routes.delete("/users/:user_id/movies", MovieController.delete);

module.exports = routes;
