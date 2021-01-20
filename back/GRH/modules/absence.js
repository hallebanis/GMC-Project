const mongoose = require("mongoose");

const absence = new mongoose.Schema({
  dateDepart: { type: Date, default: Date.now() },
  motif: { type: String, default: "N/A" },
  idPersonnel: { type: mongoose.Types.ObjectId, ref: "personnel" },
});
module.exports = mongoose.model("absence", absence);
