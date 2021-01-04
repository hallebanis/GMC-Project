const mongoose = require('mongoose')
const schema = mongoose.Schema

const CommandeSchema = new schema({
    idCommande: { Number },
    date: {
        type: Date,
        //default: date.now
        required: true
    },
    total: { Number },
    isValidate: {
        type: Boolean,
        default: false,
        required: true,
    },
    numero: { Number },
    idFournisseur:{
        type : mongoose.Types.ObjectId,
        ref : "fournisseur",
    }
})
module.exports = mongoose.model('Commande', CommandeSchema)