const mongoose = require('mongoose')
const schema = mongoose.Schema

const ProduitSchema = new schema({
    idProduit: {
        type: Number,
        required: true,
    },
    reference: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
    },
    prixUnitaire: {
        type: Number,
        required: true
    },
    etat: {
        type: String,
        enum: ["en stock", "hors stock"]
    },
    prixAchatHT: { Number },
    prixVenteHT: { Number },
    qteStock: { Number },
    idCategorie: {
        type : mongoose.Types.ObjectId,
        ref : "categorie",
    },
    idTva : {
        type : mongoose.Types.ObjectId,
        ref : "tva"
    }



})
module.exports = mongoose.model('Produit', ProduitSchema)