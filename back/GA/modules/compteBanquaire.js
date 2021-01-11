const mongoose = require("mongoose");
const schema = mongoose.Schema;

const compteBanquaireSchema = new schema({
  RIB: {
    type: String,
    required: true,
  },
  banque: {
    type: String,
    required: true,
  },
  agence: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("compteBancaire", compteBanquaireSchema);
