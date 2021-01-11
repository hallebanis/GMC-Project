const mongoose = require("mongoose");
const schema = mongoose.Schema;

const FournisseurSchema = new schema({
  matricule: {
    type: String,
    required: true,
  },
  numTel: { type: String },
  email: { type: String },
  adresse: { type: String },
  idCompteBancaire: { type: mongoose.Types.ObjectId, ref: "compteBancaire" },
});

module.exports = mongoose.model("founisseur", FournisseurSchema);
