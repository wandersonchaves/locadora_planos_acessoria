const User = require("../models/User");
const Movie = require("../models/Movie");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: "movies",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    return res.json(user.movies);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const [movie] = await Movie.findOrCreate({ where: { name } });

    await user.addMovie(movie);

    return res.json(movie);
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const movie = await Movie.findOne({ where: { name } });

    await user.removeMovie(movie);

    return res.json();
  },
};
