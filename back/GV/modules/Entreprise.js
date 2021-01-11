const mongoose = require('mongoose')
const schema = mongoose.Schema

const EntrepriseSchema = new schema({
    matricule: { type: String ,required: true },
    tel: { type: number ,required: true},
    email: { type: email ,required: true},
})

module.exports = mongoose.model('entreprise', EntrepriseSchema)