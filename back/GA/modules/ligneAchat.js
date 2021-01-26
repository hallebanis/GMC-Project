const mongoose = require("mongoose");
const schema = mongoose.Schema;

const LigneAchatSchema = new schema({
  quantite: {
    type: Number,
  },
  sousTotal: { type: Number },
  idCommande: {
    type: mongoose.Types.ObjectId,
    ref: "commandeAchat",
  },
  idProduit: {
    type: mongoose.Types.ObjectId,
    ref: "produit",
  },
});
module.exports = mongoose.model("ligneAchat", LigneAchatSchema);
