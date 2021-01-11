const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ContactSchema = new schema({
  nom: { type: date },
  prenom: { type: number },
  fonction: { type: Boolean },
  email: { type: email },
  tel: { type: number },
  id_entreprise: { type: Schema.Types.ObjectId, ref: "Entreprise" },
});
module.exports = mongoose.model("contact", ContactSchema);
