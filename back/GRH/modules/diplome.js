const mongoose = require("mongoose");

const diplome = new mongoose.Schema({
  titre: { type: String, required: true },
  anneesDeScolarite: { type: Date, required: true },
  ecole: { type: String, required: true },
  idPersonnel :{type:mongoose.Types.ObjectId , ref:"personnel"},

});

module.exports = mongoose.model("diplome", diplome);