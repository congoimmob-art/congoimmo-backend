const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API CongoImmo opérationnelle"
  });
});

try {
  console.log("Tentative de chargement de authRoutes...");
  app.use("/api/auth", require("./routes/authRoutes"));
  console.log("authRoutes chargé avec succès !");
} catch (error) {
  console.log("=== ERREUR CRITIQUE DE CHARGEMENT ===");
  console.log("Message :", error.message);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
}); // <-- L'accolade et la parenthèse manquantes ont été ajoutées ici !
});
