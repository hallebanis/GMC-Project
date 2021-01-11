const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CommandeVenteSchema = new schema({
  dateCommande: { type: Date },
  total: { type: Number },
  isValidate: { type: Boolean },
  numero: Number,
  clientId: { type: mongoose.Types.ObjectId, ref: "client" },
  ligneVente: [{ type: mongoose.Types.ObjectId, ref: "LigneVente" }],
});

module.exports = mongoose.model("commandeVente", CommandeVenteSchema);
