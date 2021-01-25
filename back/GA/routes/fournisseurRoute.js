const express = require("express");
const router = express.Router();
const Fournisseur = require("../modules/fournisseur");
const authMiddleware = require("../../helpers/authMiddleware");

// Route Create New Fournissuer
// Path : http://localhost:5000/api/addFournisseur
router.post("/addFournisseur", authMiddleware, (req, res) => {
  const { matricule, nom, numTel, email, adresse, compteBancaire } = req.body;
  const fournisseurModel = new Fournisseur({
    nom,
    matricule,
    numTel,
    email,
    adresse,
    compteBancaire,
  });
  fournisseurModel
    .save()
    .then((fournisseur) => res.status(200).json(fournisseur))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read All fournisseur
// Path : http://localhost:5000/api/allFournisseur
router.get("/allFournisseur", authMiddleware, (req, res) => {
  Fournisseur.find()
    .then((fournisseurs) => res.status(200).json(fournisseurs))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Delete fournisseur
// Path : http://localhost:5000/api/deleteFournisseur/:id
router.delete("/deleteFournisseur/:id", authMiddleware, (req, res) => {
  Fournisseur.findByIdAndDelete(req.params.id)
    .then((fournisseur) => res.status(200).json(fournisseur))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
//Route  Update  fournisseur
// Path : http://localhost:5000/api/updateFournisseur
router.put("/updateFournisseur", authMiddleware, (req, res) => {
  const {
    _id,
    matricule,
    numTel,
    email,
    adresse,
    nom,
    compteBancaire,
  } = req.body;
  Fournisseur.findByIdAndUpdate(
    _id,
    { matricule, numTel, email, adresse, nom, compteBancaire },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      Fournisseur.findById(_id)
        .then((fournisseur) => res.json(fournisseur))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

module.exports = router;
