const mongoose = require("mongoose");
const schema = mongoose.Schema;

const FactureVenteSchema = new schema({
  numFacture: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  totalAvantRemise: {
    type: Number,
    required: true,
  },
  description: {
    String,
  },
  remise: {
    type: Number,
  },
  totalApresRemise: {
    type: Number,
    required: true,
  },
  isValidate: {
    type: Boolean,
    default: false,
  },
  idClient: {
    type: mongoose.Types.ObjectId,
    ref: "client",
  },
  idCommand: {
    type: mongoose.Types.ObjectId,
    ref: "commandeVente",
  },
});

module.exports = mongoose.model("factureVente", FactureVenteSchema);
