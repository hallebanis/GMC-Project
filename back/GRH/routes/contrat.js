const express = require('express')
const router = express.Router();
const newContrat=require('../modules/contrat');
const authMiddleware = require('../../helpers/authMiddleware')


router.post("/contrat", (req, res) => {
  const {dateFin,dateDebut, salaireDeBase,typeContrat}=req.body
    let contratModel = new newContrat({
      dateDebut,
      dateFin,
      salaireDeBase,
      typeContrat
    });
    contratModel
      .save()
      .then((contrat) => res.status(200).json(contrat))
      .catch((err) => res.status(400).json(err));
  });
  
  router.get("/contrat",authMiddleware,(req, res) => {
    newContrat.find((err, doc) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: "server ERROR" }] });      }
      // console.log(doc);
      res.status(200).send(doc);
    });
  });
  module.exports = router;