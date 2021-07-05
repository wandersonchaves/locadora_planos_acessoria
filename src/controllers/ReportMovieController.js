const { Op } = require("sequelize");
const Movie = require("../models/Movie");

module.exports = {
  async show(req, res) {
    // Encontrar todos os filmes pelo título

    const movies = await Movie.findAll({
      attributes: ["title"],
      where: { title: { [Op.iLike]: "%Furious" } },
    });

    return res.json(movies);
  },
};
