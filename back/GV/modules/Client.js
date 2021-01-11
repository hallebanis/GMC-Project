const mongoose = require('mongoose')
const schema = mongoose.Schema

const ClientSchema = new schema({
    nom: { type: String , required: true },
    prenom: { type: String , required: true},
    adresse: { type: String },
    civilité: {type: String },
    email:{type: email, required: true} ,
    tel:{type: Number} ,
    
})

module.exports = mongoose.model('client', ClientSchema)