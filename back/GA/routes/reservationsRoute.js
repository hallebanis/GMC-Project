const express = require('express')
const router = express.Router();
const newReservations = require("../modules/reservations")



router.post("/Reservations", (req, res) => {
  const { date } = req.body
  const reservationsModel = new newReservations ({
    date
  });
  reservationsModel.save()
    .then((reservations) => res.status(200).json(reservations))
    .catch((err) => res.status(400).json(err));
});

router.get("/reservations", (req, res) => {
  newReservations.find()
    .then(reservations => res.json(reservations))
    .catch(err => console.log(err.message))
});
module.exports = router;