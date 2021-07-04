const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Movie = require("../models/Movie");

const connection = new Sequelize(dbConfig);

User.init(connection);
Movie.init(connection);

User.associate(connection.models);
Movie.associate(connection.models);

module.exports = connection;
