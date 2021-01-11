const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ContactSchema = new schema({
  nom: { type: String },
  prenom: { type: String },
  fonction: { type: String },
  email: { type: String },
  tel: { type: String },
  id_entreprise: { type: Schema.Types.ObjectId, ref: "Entreprise" },
});
module.exports = mongoose.model("contact", ContactSchema);

