const { Mongoose } = require("mongoose");

const mongoose = require('mongoose')
const schema = mongoose.Schema

const ChequeSchema = new schema({
    idCheque: { Number },
    numero: {
        type: Number,
        require: true
    },
    montant: { Number },
    echeance : {Date},
    idCompte : {
        type : mongoose.Types.ObjectId,
        ref : "compteBanquaire",
    }

})
module.exports = mongoose.model('Cheque', ChequeSchema)