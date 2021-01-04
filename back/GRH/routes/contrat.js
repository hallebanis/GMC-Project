const express = require('express')
const router = express.Router();
const newContrat=require('../modules/contrat');

router.post("/contrat", (req, res) => {
    let db = new Date(req.body.dateDebut);
    let df = new Date(req.body.dateFin);
    let contratModel = new newContrat({
      dateDebut: db,
      dateFin: df,
      salaireDeBase: req.body.salaireDeBase,
      typeContrat: req.body.typeContrat,
    });
    contratModel
      .save()
      .then((contrat) => res.status(200).json(contrat))
      .catch((err) => res.status(400).json(err));
  });
  
  router.get("/contrat", (req, res) => {
    newContrat.find((err, doc) => {
      if (err) {
        console.log(err.msg);
      }
      // console.log(doc);
      res.send(doc);
    });
  });
  module.exports = router;