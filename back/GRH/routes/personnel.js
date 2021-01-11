const express = require("express");
const router = express.Router();

const personnel = require("../modules/personnel");

const authMiddleware = require("../../helpers/authMiddleware");

router.post("/personnel", authMiddleware, (req, res) => {
  const {
    nom,
    prenom,
    adresse,
    email,
    CIN,
    dateDeNaissance,
    lieuDeNaissance,
    matCnss,
    matricule,
    situationFamiliale,
    nombreEnfants,
    categorie,
  } = req.body;
  let newEmployee = new personnel({
    nom,
    prenom,
    adresse,
    email,
    CIN,
    dateDeNaissance,
    lieuDeNaissance,
    matricule,
    matCnss,
    situationFamiliale,
    nombreEnfants,
    categorie,
  });
  newEmployee
    .save()
    .then((personnel) => res.status(200).json(personnel))

    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.get("/personnel", authMiddleware, (req, res) => {
  personnel.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    res.status(200).send(doc);
  });
});

router.delete("/personnel/:id", authMiddleware, (req, res) => {
  const personnelId = req.params.id;
  personnel
    .findByIdAndDelete(personnelId)
    .then((personnel) => res.status(200).json(personnel))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.put("/personnel/:id", authMiddleware, (req, res) => {
  const perId = req.params.id;
  const {
    nom,
    prenom,
    adresse,
    email,
    CIN,
    dateDeNaissance,
    lieuDeNaissance,
    matCnss,
    matricule,
    situationFamiliale,
    nombreEnfants,
    categorie,
  } = req.body;
  personnel
    .findByIdAndUpdate(perId, {
      nom,
      prenom,
      adresse,
      email,
      CIN,
      dateDeNaissance,
      lieuDeNaissance,
      matCnss,
      matricule,
      situationFamiliale,
      nombreEnfants,
      categorie,
    })
    .then((personnel) => res.status(200).json(personnel))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});
module.exports = router;
