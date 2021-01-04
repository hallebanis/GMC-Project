const express = require("express");
const router = express.Router();
const newPret = require("../modules/pret");

router.post("/pret", (req, res) => {
  let db = new Date(req.body.dateDebut);
  let df = new Date(req.body.dateFin);
  let pretModel = new newPret({
    montantTotal: req.body.montantTotal,
    mensualite: req.body.mensualite,
    dateDebut: db,
    dateFin: df,
  });
  pretModel
    .save()
    .then((pret) => res.status(200).json(pret))
    .catch((err) => res.status(400).json(err));
});

router.get("/pret", (req, res) => {
  newPret.find((err, doc) => {
    if (err) {
      console.log(err.msg);
    }
    console.log(doc);
    res.send(doc);
  });
});
module.exports = router;
