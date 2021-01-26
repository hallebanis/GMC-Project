const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CommandeSchema = new schema({
  date: {
    type: Date,
    default: Date.now,
  },
  total: { type: Number },
  isValidate: {
    type: Boolean,
    default: false,
  },
  numero: { type: Number },
  idFournisseur: {
    type: mongoose.Types.ObjectId,
    ref: "fournisseur",
  },
});
module.exports = mongoose.model("commande", CommandeSchema);
