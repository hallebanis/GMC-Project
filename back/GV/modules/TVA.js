const mongoose = require('mongoose')
const schema = mongoose.Schema

const TVASchema = new schema({
    taux: { type: number , required: true },
    description: { type: String },
})

module.exports = mongoose.model('TVA', TVASchema)