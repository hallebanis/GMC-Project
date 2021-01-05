const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ReservationSchema = new schema({
  date: { type: Date },
});
module.exports = mongoose.model("reservation", ReservationSchema);
