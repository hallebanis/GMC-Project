const mongoose = require("mongoose");
const schema = mongoose.Schema;

const EntrepriseSchema = new schema({
  matricule: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  contactId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "contact",
    },
  ],
});
module.exports = mongoose.model("entreprise", EntrepriseSchema);
