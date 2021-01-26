const express = require("express");
const router = express.Router();
const newLigne = require("../modules/ligneAchat");
const authMiddleware = require("../../helpers/authMiddleware");
const Produit = require("../modules/produit");

// Route Create New Ligne
// Path : http://localhost:5000/api/addLigne
router.post("/addLigne", authMiddleware, (req, res) => {
  const { quantite, sousTotal, idCommande, idProduit } = req.body;
  const ligneModel = new newLigne({
    quantite,
    sousTotal,
    idCommande,
    idProduit,
  });
  ligneModel
    .save()
    .then((ligne) => {
      Produit.findByIdAndUpdate(
        idProduit,
        { qteStock: qteStock + quantite },
        (err, data) => {
          if (err) res.status(400).json({ errors: [{ msg: err }] });
        }
      );
      res.status(200).json(ligne);
    })
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read ligne
// Path : http://localhost:5000/api/Ligne
router.get("/Ligne", authMiddleware, (req, res) => {
  newLigne
    .find()
    .then((ligne) => res.status(200).json(ligne))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Delete ligne
// Path : http://localhost:5000/api/deleteLigne/:id
router.delete("/deleteLigne/:id", authMiddleware, (req, res) => {
  newLigne
    .findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "Ligne Deleted" }))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
//Route  Update  ligne
// Path : http://localhost:5000/api/updateligne
router.put("/updateligne", authMiddleware, (req, res) => {
  const { quantite, sousTotal, description } = req.body;

  newLigne.findByIdAndUpdate(
    id,
    { quantite, sousTotal, description },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      newLigne
        .findById(req.params.id)
        .then((ligne) => res.json(ligne))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

module.exports = router;
