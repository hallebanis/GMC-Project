const express = require('express');
const router = express.Router();
const newFournissuer = require("../modules/fournisseur")


// Route Create New Fournissuer
router.post('/addFournisseur', (req, res) => {
    const { matricule, numTel, email, adresse, idCompteBancaire } = req.body
    const fournisseurModel = new newFournissuer({
        matricule,
        numTel,
        email,
        adresse,
        idCompteBancaire
    })
    fournisseurModel.save()
        .then(fournisseur => res.json(fournisseur))
        .catch(err => console.log(err.message))
})

// Route Read All fournisseur
router.get('/allFournisseur', (req, res) => {
    newFournisseur.find()
        .then(fournisseurs => res.json(fournisseurs))
        .catch(err => console.log(err.message))
})

//Route Read One fournisseur By Id
router.get('/Fournisseur/:id', (req, res) => {
    newFournisseur.findById(req.params.id)
        .then(fournisseur => res.json(fournisseur))
        .catch(err => console.log(err.message))
})
//Route Delete fournisseur
router.delete('/deleteFournisseur/:id', (req, res) => {
    newFournisseur.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Fournisseur Deleted' }))
        .catch(err => console.log(err.message))
})
//Route  Update  fournisseur
router.put('/updateFournisseur/:id', (req, res) => {
    newFournisseur.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newfournisseur.findById(req.params.id)
            .then(fournisseur => res.json(fournisseur))
            .catch(err => console.log(err.message))
    })
})
module.exports = router