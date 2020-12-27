const mongoose=require('mongoose')
const avance= new mongoose.Schema({
    date:{type: Date , required:true},
    montant:{type:Number , required:true},
    idPersonnel :{type:mongoose.Types.ObjectId , ref:"personnel"},

});
module.exports=mongoose.model('avance', avance);