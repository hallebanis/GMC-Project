const express = require("express");
const router = express.Router();
const newAvance = require("../modules/avance");
const authMiddleware = require("../../helpers/authMiddleware");
const personnel = require("../modules/personnel");

router.post("/avance", authMiddleware, (req, res) => {
  const { date, montant, idPersonnel } = req.body;
  let avanceModel = new newAvance({ date, montant, idPersonnel });
  avanceModel
    .save()
    .then((avance) => {
      personnel
        .findByIdAndUpdate(idPersonnel, { $push: { avance: avance._id } })
        .then(() => {})
        .catch(() => {});
      res.status(200).json(avance);
    })
    .catch((err) => {
      res.status(400).json({ errors: [{ msg: err }] });
    });
});

router.get("/avance", authMiddleware, (req, res) => {
  newAvance
    .find()
    .populate(idPersonnel)
    .then((avance) => {
      res.status(200).json(avance);
    })
    .catch((err) => {
      res.status(400).json({ errors: [{ msg: err }] });
    });
});

module.exports = router;
