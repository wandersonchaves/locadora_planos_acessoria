const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        director: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
      },
      { sequelize, tableName: "movies" }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "movie_id",
      through: "user_movies",
      as: "users",
    });
  }
}

module.exports = Movie;
