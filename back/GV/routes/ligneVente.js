const express = require("express");
const router = express.Router();
const LigneVente = require("../modules/LigneVente");
const authMiddleware = require("../../helpers/authMiddleware");
const Produit = require("../../GA/modules/produit");
const CommandeVente = require("../modules/CommandeVente");

//Route Create Ligne Vente
//path: http://localhost:5000/api/AddLigneVente
router.post("/AddLigneVente", authMiddleware, (req, res) => {
  const { quantité, sousTotal, produitId, commandeId } = req.body;
  let LVenteModel = new LigneVente({
    quantité,
    sousTotal,
    produitId,
    commandeId,
  });
  LVenteModel.save()

    .then((LVente) => {
      Produit.findByIdAndUpdate(produitId, { $inc: { qteStock: -quantité } })
        .then(() => {})
        .catch(() => {});
      CommandeVente.findByIdAndUpdate(commandeId, {
        $inc: { total: sousTotal },
      })
        .then(() => {})
        .catch(() => {});
      res.status(200).json(LVente);
    })
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read Ligne Vente
//path: http://localhost:5000/api/LignesVente
router.get("/LignesVente", authMiddleware, (req, res) => {
  LigneVente.find()
    .then((LVente) => res.status(200).json(LVente))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Ligne Vente
//path: http://localhost:5000/api/updateLigneVente
router.put("/updateLigneVente", authMiddleware, (req, res) => {
  const { id, quantité, sousTotal } = req.body;
  LigneVente.findByIdAndUpdate(id, { quantité, sousTotal }, (err, data) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: err }] });
    }
    LigneVente.findById(req.params.id)
      .then((LVente) => res.status(200).json(LVente))
      .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
  });
});

//Route Delete Ligne Vente
//path: http://localhost:5000/api/deleteLigneVente/:id
router.delete("/deleteLigneVente/:id", authMiddleware, (req, res) => {
  LigneVente.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ msg: "Ligne Vente Deleted" }))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
