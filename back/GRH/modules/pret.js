const mongoose = require("mongoose");

const pret = new mongoose.Schema({
  montantTotal: { type: Number, required: true },
  mensualite: { type: String, required: true },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
});
module.exports = mongoose.model("pret", pret);
