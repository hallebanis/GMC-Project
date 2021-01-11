const express = require("express");
const router = express.Router();
const newAvance = require("../modules/avance");
const authMiddleware = require("../../helpers/authMiddleware");

router.post("/avance", authMiddleware,(req, res) => {
  const { date, montant } = req.body;
  let avanceModel = new newAvance({ date, montant });
  avanceModel
    .save()
    .then((absence) => res.status(200).json(absence))
    .catch((err) => res.status(400).json(err));
});

router.get("/avance", authMiddleware,(req, res) => {
  newAvance.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});


module.exports = router;
