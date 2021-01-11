const mongoose = require('mongoose')
const schema = mongoose.Schema

const EntrepriseSchema = new schema({
    matricule: { type: String ,required: true },
    tel: { type: String ,required: true},
    email: { type: String ,required: true},
})

module.exports = mongoose.model('entreprise', EntrepriseSchema)