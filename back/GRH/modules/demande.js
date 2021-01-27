const mongoose = require("mongoose");

const demandeSchema = new mongoose.Schema({
  sujet: { type: String, required: true, enum: ["congé", "avance", "autre"] },
  etat: { type: String, enum: ["lu", "en attente", "envoyée", "acceptée"] },
  description: { type: String, required: true },
  dateEnvoie: { type: Date, required: true },
  dateReception: { type: Date },
  dateDecision: { type: Date },
  decision: {
    type: String,
    enum: ["accepté", "refusé", "N/A"],
    default: "N/A",
  },
  personnelId: { type: mongoose.Types.ObjectId, ref: "personnel" },
});

module.exports = mongoose.model("demande", demandeSchema);
