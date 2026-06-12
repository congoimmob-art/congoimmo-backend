const mongoose = require("mongoose");

const annonceSchema = new mongoose.Schema(
  {
    titre: String,

    description: String,

    prix: Number,

    ville: String,

    quartier: String,

    categorie: String,

    typeTransaction: String,

    chambres: Number,

    sallesDeBain: Number,

    surface: Number,

    images: [String],

    agence: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Annonce",
  annonceSchema
);
