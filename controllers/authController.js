const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const {
      nom,
      email,
      password,
      telephone
    } = req.body;

    const existe = await User.findOne({ email });

    if (existe) {
      return res.status(400).json({
        message: "Email déjà utilisé"
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      nom,
      email,
      password: hashed,
      telephone,
      role: "agence"
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Utilisateur introuvable"
      });
    }

    const ok = await bcrypt.compare(
      password,
      user.password
    );

    if (!ok) {
      return res.status(400).json({
        message: "Mot de passe incorrect"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      token,
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
