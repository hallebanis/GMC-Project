const mongoose = require('mongoose')
const schema = mongoose.Schema

const ReservationSchema = new schema({
    date: { type: date , required: true , default: date.now},  
})

module.exports = mongoose.model('reservation', ReservationSchema)