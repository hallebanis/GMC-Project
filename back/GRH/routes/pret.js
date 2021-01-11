const express = require("express");
const router = express.Router();
const newPret = require("../modules/pret");
const authMiddleware = require('../../helpers/authMiddleware')


router.post("/pret", (req, res) => {
  const { montantTotal, mensualite, dateDebut, dateFin } = req.body;
  let pretModel = new newPret({
    montantTotal,
    mensualite,
    dateDebut,
    dateFin,
  });
  pretModel
    .save()
    .then((pret) => res.status(200).json(pret))
    .catch((err) => res.status(400).json(err));
});


router.get("/pret",authMiddleware, (req, res) => {
  newPret.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });    }
   // console.log(doc);
    res.status(200).send(doc);

  });
});
module.exports = router;
