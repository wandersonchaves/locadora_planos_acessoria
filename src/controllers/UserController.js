const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.json(user);
  },

  async oauth(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (email !== user.email) {
      return res.status(400).send({ error: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).send({ error: "Invalid password" });
    }

    res.send({ user });
  },
};
