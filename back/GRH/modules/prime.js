const mongoose = require("mongoose");

const prime = new mongoose.Schema({
  titre: { type: String, required: true },
  montant: { type: Number, required: true },
});

module.exports = mongoose.model("prime", prime);