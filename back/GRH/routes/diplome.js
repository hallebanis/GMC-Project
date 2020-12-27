const express = require("express");
const router = express.Router();
const newDiplome = require("../modules/diplome");

router.post("/diplome", (req, res) => {
  let dipModel = new newDiplome({
    titre: req.body.titre,
    anneesDeScolarite: req.body.anneesDeScolarite,
    ecole: req.body.ecole,
  });
  dipModel
    .save()
    .then((diplome) => res.status(200).json(diplome))
    .catch((err) => res.status(400).json(err));
});

router.get("/diplome", (req, res) => {
  newDiplome.find((err, doc) => {
    if (err) {
      console.log(err.msg);
    }
    // console.log(doc);
    res.send(doc);
  });
});
module.exports = router;