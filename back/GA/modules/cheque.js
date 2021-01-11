const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ChequeSchema = new schema({
  numero: {
    type: Number,
    require: true,
  },
  montant: { type: Number },
  echeance: { type: Date },
  idCompte: {
    type: mongoose.Types.ObjectId,
    ref: "compteBancaire",
  },
  idPaiement: { type: mongoose.Types.ObjectId, ref: "paiement" },
});
module.exports = mongoose.model("Cheque", ChequeSchema);
