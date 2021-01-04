const mongoose = require('mongoose');

const assignPrime = new mongoose.Schema({
    date :{type: Date , required : true},
    idPersonnel :{type:mongoose.Types.ObjectId , ref:"personnel"},
    idPrime : {type:mongoose.Types.ObjectId , ref:"prime"}

})