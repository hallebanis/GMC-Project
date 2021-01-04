const mongoose = require('mongoose')
const schema = mongoose.Schema

const TvaSchema = new schema({
    idTva : {Number},
    taux : {
        type : Number,
        required : true
    },
    description :{String},
    
    


})
module.exports = mongoose.model('Tva',TvaSchema)