const mongoose = require('mongoose')
const schema = mongoose.Schema

const LigneReservationSchema = new schema({
    quantité: { type: number , required: true },
    id_reservation : [{ type: Schema.Types.ObjectId, ref: 'Reservation'}]
})

module.exports = mongoose.model('ligneReservation', LigneReservationSchema)