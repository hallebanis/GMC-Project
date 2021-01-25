const mongoose = require("mongoose");
const schema = mongoose.Schema;

const FournisseurSchema = new schema({
  matricule: {
    type: String,
    required: true,
  },
  nom: { type: String },
  numTel: { type: String },
  email: { type: String },
  adresse: { type: String },
  compteBancaire: { type: String },
});

module.exports = mongoose.model("fournisseur", FournisseurSchema);
