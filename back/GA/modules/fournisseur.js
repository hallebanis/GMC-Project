const mongoose = require('mongoose')
const schema = mongoose.Schema

const FournisseurSchema = new schema({
    idFournisseur: { Number },
    matricule: {
        type: String,
        required: true
    },
    numTel: { Number },
    email: { String },
    adresse: { String },

})

module.exports = mongoose.model('Founisseur', FournisseurSchema)