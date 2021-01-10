const express = require("express");
const router = express.Router();
const personnel = require("../modules/personnel");

router.post("/personnel", (req, res) => {
  let newEmployee = new personnel({
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    email: req.body.email,
    cin: req.body.cin,
    dateDeNaissance: req.body.dateDeNaissance,
    lieuDeNaissance: req.body.lieuDeNaissance,
    matricule: req.body.matricule,
    matCnss: req.body.matCnss,
    situationFamiliale: req.body.situationFamiliale,
    nombreEnfants: req.body.nombreEnfants,
    categorie: req.body.categorie,
  });
  newEmployee
    .save()
    .then((personnel) => res.status(200).json(personnel))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.get("/personnel", (req, res) => {
  personnel.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    //console.log(doc);
    res.status(200).json(doc);
  });
});
module.exports = router;
