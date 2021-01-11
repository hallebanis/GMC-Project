const express = require("express");
const router = express.Router();
const newLigneReservation = require("../modules/LigneReservation");

//Route Create Ligne Reservation
router.post("/AddLigneReservation", (req, res) => {
    const { quantité, reservationId } = req.body;
    let LReservationModel = new newLigneReservation({
        quantité,
        reservationId
    });
    LReservationModel.save()
        .then((LReserv) => res.status(200).json(LReserv))
        .catch((err) => res.status(400).json(err));
});

//Route Read Ligne Reservation
router.get("/LignesReservation", (req, res) => {
    newLigneReservation
        .find()
        .then((LReserv) => res.json(LReserv))
        .catch((err) => console.log(err.message));
});

//Route Update Ligne Reservation
router.put("/updateLigneReservation/:id", (req, res) => {
    newLigneReservation.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        (err, data) => {
            if (err) {
                throw err;
            }
            newLigneReservation
                .findById(req.params.id)
                .then((LReserv) => res.json(LReserv))
                .catch((err) => console.log(err.message));
        }
    );
});

//Route Delete Ligne Reservation
router.delete("/deleteLigneReservation/:id", (req, res) => {
    newLigneReservation
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Ligne Reservation Deleted" }))
        .catch((err) => console.log(err.message));
});

module.exports = router;
