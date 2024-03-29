const express = require("express");
const router = express.Router();
const newReservation = require("../modules/Reservation");
const authMiddleware = require ("../../helpers/authMiddleware");

//Route Create Reservation
//path: http://localhost:5000/api/AddReservation
router.post("/AddReservation", authMiddleware, (req, res) => {
    const { dateReservation,reservationId } = req.body;
    let ReservationModel = new newReservation({
        dateReservation,
        reservationId
    });
    ReservationModel.save()
        .then((Reservation) => res.status(200).json(Reservation))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read Reservation
//path: http://localhost:5000/api/reservations
router.get("/reservations", authMiddleware, (req, res) => {
    newReservation
        .find()
        .then((Reservation) => res.status(200).json(Reservation))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Reservation
//path: http://localhost:5000/api/updateReservation
router.put("/updateReservation", authMiddleware, (req, res) => {
    const {id,dateReservation} = req.body;
    newReservation.findByIdAndUpdate(
        id,
        { dateReservation },
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newReservation
                .findById(req.params.id)
                .then((Reservation) => res.status(200).json(Reservation))
                .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
        }
    );
});

//Route Delete Reservation
//path: http://localhost:5000/api/deleteReservation/:id
router.delete("/deleteReservation/:id", authMiddleware, (req, res) => {
    newReservation
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ msg: "Reservation Deleted" }))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
