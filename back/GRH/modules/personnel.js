const mongoose = require("mongoose");

const personnelSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String },
  adresse: { type: String },
  email: { type: String },
  CIN: { type: String, required: true },
  dateDeNaissance: { type: Date },
  lieuDeNaissance: { type: String },
  matricule: { type: String, required: true },
  matCnss: { type: String },
  situationFamiliale: { type: String },
  nombreEnfants: { type: Number },
  categorie: { type: String },
  absence: [{ type: mongoose.Types.ObjectId, ref: "absence" }],
  avance: [{ type: mongoose.Types.ObjectId, ref: "avance" }],
  contrat: [{ type: mongoose.Types.ObjectId, ref: "contrat" }],
  demande: [{ type: mongoose.Types.ObjectId, ref: "demande" }],
  diplome: { type: mongoose.Types.ObjectId, ref: "diplome" },
  embauche: { type: mongoose.Types.ObjectId, ref: "embauche" },
  pointage: [{ type: mongoose.Types.ObjectId, ref: "pointage" }],
  pret: [{ type: mongoose.Types.ObjectId, ref: "pret" }],
  assignPrime: [{ type: mongoose.Types.ObjectId, ref: "assignPrime" }],
});

module.exports = mongoose.model("personnel", personnelSchema);
