const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ReservationSchema = new schema({
  dateReservation: { type: Date, required: true, default: date.now },
  reservations: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ligneReservation",
    },
  ],
});

module.exports = mongoose.model("reservation", ReservationSchema);
