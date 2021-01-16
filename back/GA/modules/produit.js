const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProduitAchatSchema = new schema({
  reference: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
  },
  prixUnitaire: {
    type: Number,
    required: true,
  },
  etat: {
    type: String,
    enum: ["en stock", "hors stock"],
  },
  prixAchatHT: { type: Number },
  prixVenteHT: { type: Number },
  qteStock: { type: Number },
  idCategorie: {
    type: mongoose.Types.ObjectId,
    ref: "categorie",
  },
  idTva: {
    type: mongoose.Types.ObjectId,
    ref: "tva",
  },
});
module.exports = mongoose.model("produit", ProduitAchatSchema);
