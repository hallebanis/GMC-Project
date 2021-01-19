const express = require("express");
const router = express.Router();
const newLigneReservation = require("../modules/LigneReservation");

//Route Create Ligne Reservation
//path: http://localhost:5000/api/AddLigneReservation
router.post("/AddLigneReservation", (req, res) => {
    const { quantité, reservationId } = req.body;
    let LReservationModel = new newLigneReservation({
        quantité,
        reservationId
    });
    LReservationModel.save()
        .then((LReserv) => res.status(200).json(LReserv))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read Ligne Reservation
//path: http://localhost:5000/api/LignesReservation
router.get("/LignesReservation", (req, res) => {
    newLigneReservation
        .find()
        .then((LReserv) => res.status(200).json(LReserv))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Ligne Reservation
//path: http://localhost:5000/api/updateLigneReservation
router.put("/updateLigneReservation", (req, res) => {
    const {id,quantité} =req.body;
    newLigneReservation.findByIdAndUpdate(
        id,
        { quantité},
        (err, data) => {
            if (err) {
                throw err;
            }
            newLigneReservation
                .findById(req.params.id)
                .then((LReserv) => res.status(200).json(LReserv))
                .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
        }
    );
});

//Route Delete Ligne Reservation
//path: http://localhost:5000/api/deleteLigneReservation/:id
router.delete("/deleteLigneReservation/:id", (req, res) => {
    newLigneReservation
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ msg: "Ligne Reservation Deleted" }))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
