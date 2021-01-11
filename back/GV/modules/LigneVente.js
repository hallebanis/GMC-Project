const mongoose = require("mongoose");
const schema = mongoose.Schema;

const LigneVenteSchema = new schema({
  quantité: { type: Number, required: true },
  description: { type: String },
  sousTotal: { type: Number },
  produitId: { type: mongoose.Types.ObjectId, ref: "produit" },
  commandeId: { type: mongoose.Types.ObjectId, ref: "commandeVente" },
});
module.exports = mongoose.model("ligneVente", LigneVenteSchema);
