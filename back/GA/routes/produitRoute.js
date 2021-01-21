const express = require('express');
const router = express.Router();
const newProduit = require("../modules/produit")
const authMiddleware = require("../../helpers/authMiddleware")

// Route Create New produit
// Path : http://localhost:5000/api/addProduit
router.post('/addProduit', authMiddleware, (req, res) => {
    const { reference, designation, prixUnitaire, etat, prixAchatHT, prixVenteHT, qteStock, idCategorie, idTva } = req.body
    const produitModel = new newProduit({
        reference,
        designation,
        prixUnitaire,
        etat,
        prixAchatHT,
        prixVenteHT,
        qteStock,
        idCategorie,
        idTva
    })
    produitModel.save()
        .then(produit => res.status(200).json(produit))
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})
// Route Read All produit
// Path : http://localhost:5000/api/allProduit
router.get('/allProduit', authMiddleware, (req, res) => {
    newProduit.find()
        .then(produits => res.status(200).json(produits))
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})

//Route Delete produit
// Path : http://localhost:5000/api/deleteproduit/:id
router.delete('/deleteproduit/:id', authMiddleware, (req, res) => {
    newProduit.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ msg: 'Produit Deleted' }))
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})
//Route  Update  produit
// Path : http://localhost:5000/api/updateProduit
router.put('/updateProduit', authMiddleware, (req, res) => {
    const { reference, designation, prixUnitaire, etat, prixAchatHT, prixVenteHT, qteStock } = req.body
    newProduit.findByIdAndUpdate(
        id,
        { reference, designation, prixUnitaire, etat, prixAchatHT, prixVenteHT, qteStock },
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newProduit.findById(req.params.id)
                .then(produit => res.status(200).json(produit))
                .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
        })
})

module.exports = router