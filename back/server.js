//modules
const dbConnect = require("./helpers/dbconnection");
const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();
dbConnect();

//middleware declaraltion
app.use(express.json());

//admin User routes
app.use("/", require("./USERS/routes/loginRoute"));

app.use("/admin", require("./USERS/routes/adminRoute"));

app.use("/user", require("./USERS/routes/userRoute"));

//ressource humaine routes
app.use("/api", require("./GRH/routes/personnel"));
app.use("/api", require("./GRH/routes/contrat"));
app.use("/api", require("./GRH/routes/pret"));
app.use("/api", require("./GRH/routes/embauche"));
app.use("/api", require("./GRH/routes/diplome"));
app.use("/api", require("./GRH/routes/absence"));
app.use("/api", require("./GRH/routes/avance"));
app.use("/api", require("./GRH/routes/motifsAbsence"));
app.use("/api", require("./GRH/routes/pointage"));
app.use("/api", require("./GRH/routes/service"));
app.use("/api", require("./GRH/routes/prime"));

// GA Routes
/* app.use("/api", require("./GA/routes/categorieRoute"));
app.use("/api", require("./GA/routes/chequeRoute"));
app.use("/api", require("./GA/routes/commandeAchatRoute"));
app.use("/api", require("./GA/routes/compteBancaireRoute"));
app.use("/api", require("./GA/routes/factureRoute"));
app.use("/api", require("./GA/routes/fournisseurRoute"));
app.use("/api", require("./GA/routes/ligneAchatRoute"));
app.use("/api", require("./GA/routes/ligneReservationRoute"));
app.use("/api", require("./GA/routes/paiementRoute"));
app.use("/api", require("./GA/routes/produitRoute"));
app.use("/api", require("./GA/routes/reservationsRoute")); */

app.use("/api", require("./GA/routes/categorieRoute"));
app.use("/api", require("./GA/routes/chequeRoute"));
app.use("/api", require("./GA/routes/commandeAchatRoute"));
app.use("/api", require("./GA/routes/compteBancaireRoute"));
app.use("/api", require("./GA/routes/factureRoute"));
app.use("/api", require("./GA/routes/fournisseurRoute"));
app.use("/api", require("./GA/routes/ligneAchatRoute"));

//GV Routes
app.use("/api", require("./GV/routes/client"));
app.use("/api", require("./GV/routes/commandeVente"));
app.use("/api", require("./GV/routes/contact"));
app.use("/api", require("./GV/routes/entreprise"));
app.use("/api", require("./GV/routes/ligneReservation"));
app.use("/api", require("./GV/routes/ligneVente"));
app.use("/api", require("./GV/routes/reservation"));
app.use("/api", require("./GV/routes/tva"));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server listening on http://localhost:${PORT}`);
});
