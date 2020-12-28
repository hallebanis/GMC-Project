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
app.use("/grh", require("./GRH/routes/personnelRoute"));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server listening on http://localhost:${PORT}`);
});
