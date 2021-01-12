const express = require('express');
const router = express.Router();
const newProduit = require("../modules/produit")


// Route Create New produit
router.post('/addProduit', (req, res) => {
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
        .then(produit => res.json(produit))
        .catch(err => console.log(err.message))
})
// Route Read All produit
router.get('/allProduit', (req, res) => {
    newProduit.find()
        .then(produits => res.json(produits))
        .catch(err => console.log(err.message))
})
//Route Read One produit By Id
router.get('/Produit/:id', (req, res) => {
    newProduit.findById(req.params.id)
        .then(produit => res.json(produit))
        .catch(err => console.log(err.message))
})
//Route Delete produit
router.delete('/deleteproduit/:id', (req, res) => {
    newProduit.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Produit Deleted' }))
        .catch(err => console.log(err.message))
})
//Route  Update  produit
router.put('/updateProduit/:id', (req, res) => {
    newProduit.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newProduit.findById(req.params.id)
            .then(produit => res.json(produit))
            .catch(err => console.log(err.message))
    })
})
module.exports = router