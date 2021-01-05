const mongoose = require('mongoose')
const schema = mongoose.Schema

const LigneReservationSchema = new schema({
    idLigne: { Number },
    quantite : {
        type : Number,
        default: 0,
    },
    idProduit : {
        type : mongoose.Types.ObjectId,
        ref : "produit",
    },
    idReservation:{
        type : mongoose.Types.ObjectId,
        ref : "reservation"
    },
    


})
module.exports = mongoose.model('LigneReservation', LigneReservationSchema)