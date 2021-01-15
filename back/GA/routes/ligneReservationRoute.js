const express = require("express");
const router = express.Router();
const newReservation = require("../modules/ligneReservation");

// Route Create New Reservation
router.post("/addReservation", (req, res) => {
  const { quantite, idProduit, idReservation } = req.body;
  const reservationModel = new newReservation({
    quantite,
    idProduit,
    idReservation,
  });
  reservationModel
    .save()
    .then((reservation) => res.json(reservation))
    .catch((err) => console.log(err.message));
});

// Route Read Reservation
router.get("/Reservation", (req, res) => {
  newReservation
    .find()
    .then((reservation) => res.json(reservation))
    .catch((err) => console.log(err.message));
});

//Route Delete reservation
router.delete("/deleteReservation/:id", (req, res) => {
  newReservation
    .findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "Reservation Deleted" }))
    .catch((err) => console.log(err.message));
});
//Route  Update  reservation
router.put("/updateReservation/:id", (req, res) => {
  newReservation.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    (err, data) => {
      if (err) {
        throw err;
      }
      newReservation
        .findById(req.params.id)
        .then((reservation) => res.json(reservation))
        .catch((err) => console.log(err.message));
    }
  );
});
module.exports = router;
