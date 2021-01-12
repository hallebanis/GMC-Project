const express = require("express");
const router = express.Router();
const newLigneVente = require("../modules/LigneVente");

//Route Create Ligne Vente
router.post("/AddLigneVente", (req, res) => {
    const { quantité, description, sousTotal, produitId, commandeId} = req.body;
    let LVenteModel = new newLigneVente({
        quantité,
        description,
        sousTotal,
        produitId,
        commandeId
    });
    LVenteModel.save()
        .then((LVente) => res.status(200).json(LVente))
        .catch((err) => res.status(400).json(err));
});

//Route Read Ligne Vente
router.get("/LignesVente", (req, res) => {
    newLigneVente
        .find()
        .then((LVente) => res.json(LVente))
        .catch((err) => console.log(err.message));
});

//Route Update Ligne Vente
router.put("/updateLigneVente/:id", (req, res) => {
    newLigneVente.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        (err, data) => {
            if (err) {
                throw err;
            }
            newLigneVente
                .findById(req.params.id)
                .then((LVente) => res.json(LVente))
                .catch((err) => console.log(err.message));
        }
    );
});

//Route Delete Ligne Vente
router.delete("/deleteLigneVente/:id", (req, res) => {
    newLigneVente
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Ligne Vente Deleted" }))
        .catch((err) => console.log(err.message));
});

module.exports = router;
