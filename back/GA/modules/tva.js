const mongoose = require("mongoose");
const schema = mongoose.Schema;

const TvaSchema = new schema({
  taux: {
    type: Number,
    required: true,
  },
  description: { type: String },
});
module.exports = mongoose.model("tva", TvaSchema);
