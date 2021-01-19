const mongoose = require("mongoose");

const absence = new mongoose.Schema({
  dateDepart: { type: Date, required: true },
  dateReprise: { type: Date, required: true },
  motif: { type: String },
  idPersonnel: { type: mongoose.Types.ObjectId, ref: "personnel" },
});
module.exports = mongoose.model("absence", absence);
