const mongoose = require('mongoose')
const schema = mongoose.Schema

const LigneVenteSchema = new schema({
    quantité: { type: number , required: true },
    description: { type: String },
    sousTotal: { type: number },
    id_produit : [{ type: Schema.Types.ObjectId, ref: 'Produit'}]
})

module.exports = mongoose.model('ligneVente', LigneVenteSchema)