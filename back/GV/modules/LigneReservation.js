const mongoose = require("mongoose");
const schema = mongoose.Schema;

const LigneReservationSchema = new schema({
  quantité: { type: Number, required: true },
  reservationId: { type: mongoose.Types.ObjectId, ref: "Reservation" },
});

module.exports = mongoose.model("ligneReservation", LigneReservationSchema);
