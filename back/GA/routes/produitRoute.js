const express = require("express");
const router = express.Router();
const Produit = require("../modules/produit");
const authMiddleware = require("../../helpers/authMiddleware");

// Route Create New produit
// Path : http://localhost:5000/api/addProduit
router.post("/addProduit", authMiddleware, (req, res) => {
  const {
    reference,
    designation,
    etat,
    prixAchatHT,
    prixVenteHT,
    qteStock,
    idCategorie,
    tva,
    idFournisseur,
  } = req.body;
  const produitModel = new Produit({
    idFournisseur,
    reference,
    designation,
    etat,
    prixAchatHT,
    prixVenteHT,
    qteStock,
    idCategorie,
    tva,
  });
  produitModel
    .save()
    .then((produit) => res.status(200).json(produit))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
// Route Read All produit
// Path : http://localhost:5000/api/allProduit
router.get("/allProduit", authMiddleware, (req, res) => {
  Produit.find()
    .populate("idCategorie")
    .populate("idFournisseur")
    .then((produits) => res.status(200).json(produits))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Delete produit
// Path : http://localhost:5000/api/deleteproduit/:id
router.delete("/deleteproduit/:id", authMiddleware, (req, res) => {
  Produit.findByIdAndDelete(req.params.id)
    .then((produit) => res.status(200).json(produit))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
//Route  Update  produit
// Path : http://localhost:5000/api/updateProduit
router.put("/updateProduit", authMiddleware, (req, res) => {
  const { _id, prixAchatHT, prixVenteHT, qteStock } = req.body;
  Produit.findByIdAndUpdate(
    _id,
    { prixAchatHT, prixVenteHT, qteStock },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      Produit.findById(_id)
        .then((produit) => res.status(200).json(produit))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

module.exports = router;
