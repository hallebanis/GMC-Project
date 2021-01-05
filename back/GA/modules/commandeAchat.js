const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CommandeSchema = new schema({
  date: {
    type: Date,
    default: date.now,
    required: true,
  },
  total: { type: Number },
  isValidate: {
    type: Boolean,
    default: false,
    required: true,
  },
  numero: { type: Number },
  idFournisseur: {
    type: mongoose.Types.ObjectId,
    ref: "fournisseur",
  },
});
module.exports = mongoose.model("Commande", CommandeSchema);
