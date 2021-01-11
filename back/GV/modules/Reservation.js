const mongoose = require('mongoose')
const schema = mongoose.Schema

const ReservationSchema = new schema({
    date: { type: date , required: true , default: Date.now},  
})

module.exports = mongoose.model('reservation', ReservationSchema)