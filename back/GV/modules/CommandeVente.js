const mongoose = require('mongoose')
const schema = mongoose.Schema

const CommandeVenteSchema = new schema({
    date: { type: date, default : Date.now },
    total: { type: number },
    isValidate: { type: Boolean },
    numero: {type : number},
    id_client: { type: Schema.Types.ObjectId, ref: 'Client' },
    id_ligneVente: {type: Schema.Types.ObjectId, ref: 'LigneVente'},
    id_entreprise: {type: Schema.Types.ObjectId, ref: 'Entreprise'}

})

module.exports = mongoose.model('commandeVente', CommandeVenteSchema)