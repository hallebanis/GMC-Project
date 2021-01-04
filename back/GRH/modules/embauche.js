const mongoose = require("mongoose");

const embauche = new mongoose.Schema({
  dateEmbauche: { type: Date, required: true },
  fonction: { type: String, required: true },
  idPersonnel :{type:mongoose.Types.ObjectId , ref:"personnel"},
  idService: {type:mongoose.Types.ObjectId, ref:"service"},

});
module.exports = mongoose.model("embauche", embauche);