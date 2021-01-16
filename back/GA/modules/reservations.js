const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ReservationAchatSchema = new schema({
  date: { type: Date },
});
module.exports = mongoose.model("reservationAchat", ReservationAchatSchema);
