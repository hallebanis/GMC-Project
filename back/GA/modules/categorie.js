const mongoose = require('mongoose')
const schema = mongoose.Schema

const CategorieSchema = new schema({
    idCategorie: { Number },
    reference: {
        type: String,
        required: true,
    },
    designation : {String},
    


})
module.exports = mongoose.model('categorie', CategorieSchema)