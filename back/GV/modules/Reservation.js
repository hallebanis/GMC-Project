const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ReservationSchema = new schema({
  dateReservation: { type: Date, required: true, default: date.now },
  reservationId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "LigneReservation",
    },
  ],
});

module.exports = mongoose.model("reservation", ReservationSchema);
