const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CategorieSchema = new schema({
  reference: {
    type: String,
    required: true,
  },
  designation: { type: String },
});
module.exports = mongoose.model("categorie", CategorieSchema);
