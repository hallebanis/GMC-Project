const mongoose = require('mongoose')
const schema = mongoose.Schema

const ReservationSchema = new schema({
    idReservation : {Number},
    date : {Date},



})
module.exports=mongoose.model('Reservation',ReservationSchema)