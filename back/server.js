//modules
const dbConnect = require("./helpers/dbconnection");
const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();
dbConnect();

//middleware declaraltion
app.use(express.json());
// Grh routes 


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

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server listening on http://localhost:${PORT}`);
});
