const express = require("express");
const router = express.Router();
const newDiplome = require("../modules/diplome");
const authMiddleware = require('../../helpers/authMiddleware')


router.post("/diplome", authMiddleware,(req, res) => {
  const {titre, anneesDeScolarite , ecole}= req.body
  let dipModel = new newDiplome({
    titre,
    anneesDeScolarite,
    ecole
  });
  dipModel
    .save()
    .then((diplome) => res.status(200).json(diplome))
    .catch((err) => res.status(400).json(err));
});

router.get("/diplome",authMiddleware, (req, res) => {
  newDiplome.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});
module.exports = router;