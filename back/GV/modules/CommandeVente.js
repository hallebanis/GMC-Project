const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CommandeVenteSchema = new schema({
  dateCommande: { type: Date },
  total: { type: Number },
  isValidate: { type: Boolean },
  numero: { type: Number },
  clientId: { type: mongoose.Types.ObjectId, ref: "client" },
  ligneVente: [{ type: mongoose.Types.ObjectId, ref: "ligneVente" }],
});

module.exports = mongoose.model("commandeVente", CommandeVenteSchema);
