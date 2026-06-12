const mongoose = require("mongoose");

const paiementSchema = new mongoose.Schema(
  {
    agence: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    montant: Number,

    methode: {
      type: String,
      enum: ["MTN", "AIRTEL"]
    },

    reference: String,

    statut: {
      type: String,
      enum: [
        "en_attente",
        "valide",
        "refuse"
      ],
      default: "en_attente"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Paiement",
  paiementSchema
);
