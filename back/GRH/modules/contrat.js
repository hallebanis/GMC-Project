const mongoose= require("mongoose")

const contrat = new mongoose.Schema({
    dateDebut:{type:Date , required: true},
    dateFin : {type:Date , required:true},
    salaireDeBase:{type :Number , required:true},
    typeContrat : {type:String , required: true},
    idPersonnel :{type:mongoose.Types.ObjectId , ref:"personnel"},

});

module.exports = mongoose.model('contrat', contrat)