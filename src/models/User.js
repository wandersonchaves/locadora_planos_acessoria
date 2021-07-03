const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Movies, {
      foreignKey: "user_id",
      through: "user_movies",
      as: "movies",
    });
  }
}

module.exports = User;
