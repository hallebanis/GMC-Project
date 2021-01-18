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
    matricule: nom + "/" + CIN,
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
  personnel
    .find()
    .populate("demande")
    .populate("abscense")
    .populate("avance")
    .populate("contrat")
    .populate("diplome")
    .populate("embauche")
    .populate("pointage")
    .populate("pret")
    .populate("assignPrime")
    .then((personnels) => {
      res.status(200).json(personnels);
    })
    .catch((err) => {
      res.status(400).json({ errors: [{ msg: err }] });
    });
});

router.delete("/personnel/:id", authMiddleware, (req, res) => {
  const personnelId = req.params.id;
  personnel
    .findByIdAndDelete(personnelId)
    .then((personnel) => {
      res.status(200).json(personnel);
    })
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.put("/personnel", authMiddleware, (req, res) => {
  const perId = req.body.id;
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
      matricule: nom + "/" + CIN,
      situationFamiliale,
      nombreEnfants,
      categorie,
    })
    .then(() => {
      personnel
        .findById(perId)
        .then((personnel) => {
          res.status(200).json(personnel);
        })
        .catch((err) =>
          res.status(400).json({ errors: [{ msg: "server ERROR" }] })
        );
    })
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});
module.exports = router;
