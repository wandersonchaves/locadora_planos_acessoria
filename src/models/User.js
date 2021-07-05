const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Movie, {
      foreignKey: "user_id",
      through: "user_movies",
      as: "movies",
    });
  }
}

module.exports = User;
