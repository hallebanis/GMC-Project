const mongoose = require("mongoose");

const assignPrime = new mongoose.Schema({
  dateAssign: { type: Date, required: true, default: Date.now() },
  idPersonnel: { type: mongoose.Types.ObjectId, ref: "personnel" },
  idPrime: { type: mongoose.Types.ObjectId, ref: "prime" },
});

module.exports = mongoose.model("assignPrime", assignPrime);
