const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CommandeVenteSchema = new schema({
  dateCommande: { type: Date,default:Date.now() },
  total: { type: Number },
  isValidate: { type: Boolean,default:false},
  numero: { type: Number },
  clientId: { type: mongoose.Types.ObjectId, ref: "client" },
  ligneVente: [{ type: mongoose.Types.ObjectId, ref: "ligneVente" }],
});

module.exports = mongoose.model("commandeVente", CommandeVenteSchema);
