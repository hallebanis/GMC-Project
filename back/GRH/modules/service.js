const mongoose = require("mongoose");

const service = new mongoose.Schema({
  nom: { type: String, required: true },
  responsable: { type: mongoose.Types.ObjectId , required: true  , ref:"personnel"},
});

module.exports = mongoose.model("service", service);
