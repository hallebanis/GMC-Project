const express = require("express");
const router = express.Router();
const newPrime = require("../modules/prime");
const authMiddleware = require("../../helpers/authMiddleware");

router.post("/prime",(req, res) => {
  const { titre, montant} = req.body;
  let primeModel = new newPrime({ titre, montant } );
  primeModel
    .save()
    .then((prime) => res.status(200).json(prime))
    .catch((err) => res.status(400).json(err));
});
router.get("/prime",(req, res) => {
    newPrime.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});
module.exports = router;