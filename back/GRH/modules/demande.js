const mongoose = require("mongoose");

const demande = new mongoose.Schema({
  sujet: { type: String, required: true, enum: ["congé", "avance", "autre"] },
  etat: { type: String, enum: ["lu", "en attente", "envoyée", "acceptée"] },
  description: { type: String, required: true },
  dateEnvoie: { type: Date, required: true },
  dateReception: { type: Date },
  dateDecision: { type: Date },
  personnelId: { type: mongoose.Types.ObjectId, ref: "personnel" },
});

module.exports = mongoose.model("demande", demande);
