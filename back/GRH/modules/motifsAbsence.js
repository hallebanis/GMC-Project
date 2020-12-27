const mongoose = require("mongoose");

const motifsAbsence = new mongoose.Schema({
  description: { type: String, required: true },
});

module.exports = mongoose.model("motifsAbsence", motifsAbsence);
