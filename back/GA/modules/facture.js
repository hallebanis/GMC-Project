const mongoose = require("mongoose");
const schema = mongoose.Schema;

const FactureSchema = new schema({
  numFacture: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
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
  type: {
    type: String,
    enum: ["achat", "vente"],
    required: true,
  },
  isValidate: {
    type: Boolean,
    default: false,
    required: true,
  },
  idFournisseur: {
    type: mongoose.Types.ObjectId,
    ref: "fournisseur",
  },
  idClient: {
    type: mongoose.Types.ObjectId,
    ref: "client",
  },
  idCommand: {
    type: mongoose.Types.ObjectId,
    ref: "commandeAchat",
  },
});

module.exports = mongoose.model("Facture", FactureSchema);
