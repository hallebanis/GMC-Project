const express = require("express");
const router = express.Router();
const newLigneVente = require("../modules/LigneVente");
const authMiddleware = require ("../../helpers/authMiddleware");

//Route Create Ligne Vente
//path: http://localhost:5000/api/AddLigneVente
router.post("/AddLigneVente", authMiddleware, (req, res) => {
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
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read Ligne Vente
//path: http://localhost:5000/api/LignesVente
router.get("/LignesVente", authMiddleware, (req, res) => {
    newLigneVente
        .find()
        .then((LVente) => res.status(200).json(LVente))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Ligne Vente
//path: http://localhost:5000/api/updateLigneVente
router.put("/updateLigneVente", authMiddleware, (req, res) => {
    const {id,quantité,description,sousTotal} = req.body;
    newLigneVente.findByIdAndUpdate(
        id,
        { quantité,description,sousTotal},
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newLigneVente
                .findById(req.params.id)
                .then((LVente) => res.status(200).json(LVente))
                .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
        }
    );
});

//Route Delete Ligne Vente
//path: http://localhost:5000/api/deleteLigneVente/:id
router.delete("/deleteLigneVente/:id", authMiddleware, (req, res) => {
    newLigneVente
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ msg: "Ligne Vente Deleted" }))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
