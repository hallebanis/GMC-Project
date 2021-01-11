const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PaiementSchema = new schema({
  montant: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["achat", "vente"],
    required: true,
  },
  avance: { type: Number },
  isValidate: {
    type: Boolean,
    default: false,
    required: true,
  },
  numFacture: {
    type: mongoose.Types.ObjectId,
    ref: "facture",
  },
  Cheques: [
    {
      type: mongoose.Types.ObjectId,
      ref: "cheque",
    },
  ],
});
module.exports = mongoose.model("paiement", PaiementSchema);
