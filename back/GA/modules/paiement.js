const mongoose = require('mongoose')
const schema = mongoose.Schema

const PaiementSchema = new schema({
    idPaiement: {
        type: Number,
        required: true
    },
    montant: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ["achat", "vente"],
        required: true,
    },
    avance: { Number },
    isValidate: {
        type: Boolean,
        default: false,
        required: true,

    },
    numFacture : {
        type : mongoose.Types.ObjectId,
        ref: "facture",
    },
    idCheque :{
        type : mongoose.Types.ObjectId,
        ref : "cheque"
    }


})
module.exports = mongoose.model('Paiement', PaiementSchema)