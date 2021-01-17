const mongoose = require("mongoose");

const reponseSchema = new mongoose.Schema({
  sujet: { type: String, required: true, enum: ["congé", "avance", "autre"] },
  etat: { type: String, enum: ["lu", "en attente", "envoyée", "acceptée"] },
  description: { type: String, required: true },
  dateReception: { type: Date },
  dateDecision: { type: Date },
  personnelId: { type: mongoose.Types.ObjectId, ref: "personnel" },
});

module.exports = mongoose.model("reponse", reponseSchema);
