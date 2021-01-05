const mongoose = require('mongoose')
const schema = mongoose.Schema

const BanqueSchema = new schema({
    idCompte: {
        type: Number,
        required: true,
    },
    RIB: {
        type: Number,
        required: true,
    },
    banque: {
        type: String,
        required: true,
    },
    agence: {
        type: String,
        required: true,
    },
    idFournisseur:{
        type : mongoose.Types.ObjectId,
        ref : "fournisseur",
    }

})
module.exports = mongoose.model('Banque', BanqueSchema)