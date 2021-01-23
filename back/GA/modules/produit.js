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
  etat: {
    type: String,
    enum: ["en stock", "hors stock"],
    default: "en stock",
  },
  prixAchatHT: { type: Number },
  prixVenteHT: { type: Number },
  qteStock: { type: Number },
  idCategorie: {
    type: mongoose.Types.ObjectId,
    ref: "categorie",
  },
  tva: {
    type: Number,
  },
});
module.exports = mongoose.model("produit", ProduitAchatSchema);
