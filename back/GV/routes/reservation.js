const express = require("express");
const router = express.Router();
const newReservation = require("../modules/Reservation");

//Route Create Reservation
router.post("/AddReservation", (req, res) => {
    const { date } = req.body;
    let ReservationModel = new newReservation({
        date
    });
    ReservationModel.save()
        .then((Reservation) => res.status(200).json(Reservation))
        .catch((err) => res.status(400).json(err));
});

//Route Read Reservation
router.get("/reservations", (req, res) => {
    newReservation
        .find()
        .then((Reservation) => res.json(Reservation))
        .catch((err) => console.log(err.message));
});

//Route Update Reservation
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
                .then((Reservation) => res.json(Reservation))
                .catch((err) => console.log(err.message));
        }
    );
});

//Route Delete Reservation
router.delete("/deleteReservation/:id", (req, res) => {
    newReservation
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Reservation Deleted" }))
        .catch((err) => console.log(err.message));
});

module.exports = router;
