const mongoose = require("mongoose");

const abonnementSchema =
  new mongoose.Schema(
    {
      agence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      formule: {
        type: String,
        enum: [
          "gratuit",
          "pro",
          "premium"
        ]
      },

      actif: {
        type: Boolean,
        default: true
      },

      dateDebut: Date,

      dateFin: Date
    },
    {
      timestamps: true
    }
  );

module.exports = mongoose.model(
  "Abonnement",
  abonnementSchema
);
