const mongoose = require("mongoose");

const personnelSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  email: { type: String, required: true },
  CIN: { type: String, required: true },
  dateDeNaissance: { type: Date, required: true },
  lieuDeNaissance: { type: String, required: true },
  matricule: { type: String, required: true },
  matCnss: { type: String, requried: true },
  situationFamiliale: { type: String, required: true },
  nombreEnfants: { type: Number, required: true },
  categorie: { type: String, required: true },
  absence: [{type:mongoose.Types.ObjectId , ref:"absence"}],
  avance:[{type:mongoose.Types.ObjectId , ref:"avance"}],
  contrat :[{type:mongoose.Types.ObjectId , ref : "contrat"}],
  demande:[{type:mongoose.Types.ObjectId , ref:"demande"}],
  diplome:[{type:mongoose.Types.ObjectId , ref:"diplome"}],
  embauche:[{type:mongoose.Types.ObjectId , ref:"embauche"}],
  pointage:[{type:mongoose.Types.ObjectId , ref:"pointage"}],
  pret:[{type:mongoose.Types.ObjectId, ref:"pret"}],
  prime:[{type:mongoose.Types.ObjectId , ref:"prime"}],
  assignPrime:[{type:mongoose.Types.ObjectId , ref:"assignPrime"}]
});

module.exports = mongoose.model("personnel", personnelSchema);
