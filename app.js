const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Assurez-vous que vos dossiers s'appellent bien "config" et "routes" en minuscules sur GitHub
const connectDB = require("./config/db");

dotenv.config();

// Connexion à la base de données
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route principale de test
app.get("/", (req, res) => {
  res.json({
    message: "API CongoImmo opérationnelle"
  });
});

// Routes de l'application
app.use("/api/auth", require("./routes/authRoutes"));

// Configuration du Port pour Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); // <-- L'accolade et la parenthèse manquantes ont été ajoutées ici !
});
