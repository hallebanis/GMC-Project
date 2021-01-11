const mongoose = require('mongoose')
const schema = mongoose.Schema

const ContactSchema = new schema({
    nom: { type: String, required: true},
    prenom: { type: String, required: true },
    fonction: { type: String },
    email: { type: email, required: true },
    tel:{type: number},
    id_entreprise: [{ type: Schema.Types.ObjectId, ref: 'Entreprise' }] 

})
module.exports = mongoose.model('contact', ContactSchema)