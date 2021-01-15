const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ReservationSchema = new schema({
  dateReservation: { type: Date, required: true, default: Date.now },
  reservationId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ligneReservation",
    },
  ],
});

module.exports = mongoose.model("reservation", ReservationSchema);
