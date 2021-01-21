const express = require("express");
const router = express.Router();
const Reservation = require("../modules/ligneReservation");
const authMiddleware= require("../../helpers/authMiddleware")

// Route Create New Reservation
// Path : http://localhost:5000/api/addReservation
router.post("/addReservation",authMiddleware, (req, res) => {
  const { quantite, idProduit, idReservation } = req.body;
  const reservationModel = new Reservation({
    quantite,
    idProduit,
    idReservation,
  });
  reservationModel
    .save()
    .then((reservation) => res.json(reservation))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read Reservation
// Path : http://localhost:5000/api/Reservation
router.get("/Reservation",authMiddleware, (req, res) => {
  Reservation.find()
    .then((reservation) => res.json(reservation))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Delete reservation
// Path : http://localhost:5000/api/deleteReservation/:id
router.delete("/deleteReservation/:id",authMiddleware, (req, res) => {
  Reservation.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "Reservation Deleted" }))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route  Update  reservation
// Path : http://localhost:5000/api/updateReservation
router.put("/updateReservation",authMiddleware, (req, res) => {
  const {quantite}=req.body;
  Reservation.findByIdAndUpdate(
    id,
    { quantite },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      Reservation.findById(req.params.id)
        .then((reservation) => res.json(reservation))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});


module.exports = router;
