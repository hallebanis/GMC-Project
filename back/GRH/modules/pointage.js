const mongoose = require("mongoose");

const pointage = new mongoose.Schema({
  date: { type: Date, required: true },
  idPersonnel :{type:mongoose.Types.ObjectId , ref:"personnel"},

});
module.exports = mongoose.model("pointage", pointage);
