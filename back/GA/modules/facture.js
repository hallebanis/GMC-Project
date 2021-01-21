const mongoose = require("mongoose");
const schema = mongoose.Schema;

const FactureSchema = new schema({
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
    required: true,
  },
  idFournisseur: {
    type: mongoose.Types.ObjectId,
    ref: "fournisseur",
  },

  idCommand: {
    type: mongoose.Types.ObjectId,
    ref: "commandeAchat",
  },
});

module.exports = mongoose.model("facture", FactureSchema);
