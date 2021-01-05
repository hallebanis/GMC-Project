const mongoose = require('mongoose')
const schema = mongoose.Schema

const LigneAchatSchema = new schema({
    idLigne: { Number },
    quantite: {
        type: Number,
        default: 0,
    },
    sousTotal: { Number },
    description: { String },
    idCommande : {
        type : mongoose.Types.ObjectId,
        ref : "commandeAchat",
    },
    idProduit : {
        type : mongoose.Types.ObjectId,
        ref : "produit"
    },

})
module.exports = mongoose.model('Ligne', LigneAchatSchema)