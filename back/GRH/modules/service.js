const mongoose = require("mongoose");

const service = new mongoose.Schema({
  nom: { type: String, required: true },
  responsable: { type: String, required: true },
});

module.exports = mongoose.model("service", service);
