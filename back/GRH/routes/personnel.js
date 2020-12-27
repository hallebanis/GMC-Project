const express = require("express");
const router = express.Router();
const newPersonnel = require("../modules/personnel");

router.post("/personnel", (req, res) => {
  let newEmployee = new newPersonnel({
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
    .catch((err) => res.status(400).json(err));
});

router.get("/personnel", (req, res) => {
  newPersonnel.find((err, doc) => {
    if (err) {
      console.log(err.msg);
    }
    //console.log(doc);
    res.send(doc);
  });
});
module.exports = router;
