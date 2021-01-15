const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ClientSchema = new schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String },
  civilite: { type: String },
  email: { type: String, required: true },
  tel: { type: String },
  commandesID: [
    {
      type: mongoose.Types.ObjectId,
      ref: "commandeVente",
    },
  ],
});
// export Schema
module.exports = mongoose.model("client", ClientSchema);
