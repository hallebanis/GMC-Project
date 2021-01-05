const mongoose = require('mongoose')
const schema = mongoose.Schema


const FactureSchema = new schema({
    numFacture: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        //default: date.now
        required: true,
    },
    totalAvantRemise: {
        type: Number,
        required: true,
    },
    description: {
        String
    },
    remise: {
        type: Number,
        required: true,
    },
    totalApresRemise: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["achat", "vente"],
        required: true,
    },
    isValidate: {
        type: Boolean,
        default: false,
        required: true,

    }


})

module.exports = mongoose.model('Facture', FactureSchema)