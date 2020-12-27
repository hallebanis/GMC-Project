const mongoose = require("mongoose");

const demande = new mongoose.Schema({
  sujet: { type: String, required: true },
  etat: { type: String, required: true },
  description: { type: String, required: true },
  dateReception: { type: Date, required: true },
  dateDecision: { type: Date, required: true },
  idPersonnel :{type:mongoose.Types.ObjectId , ref:"personnel"},
});

module.exports = mongoose.model("demande", demande);
