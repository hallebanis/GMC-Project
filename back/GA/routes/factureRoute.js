const express = require('express');
const router = express.Router();
const newFacture = require("../modules/facture")


// Route Create New facture
router.post('/addFacture', (req, res) => {
    const { numFacture, date, totalAvantRemise, description, remise, totalApresRemise, type, isValidate, idFournisseur, idClient, idCommand } = req.body
    const factureModel = new newFacture({
        numFacture,
        date,
        totalAvantRemise,
        description,
        remise,
        totalApresRemise,
        type,
        isValidate,
        idFournisseur,
        idClient,
        idCommand
    })
    factureModel.save()
        .then(facture => res.json(facture))
        .catch(err => console.log(err.message))
})
// Route Read All facture
router.get('/allFacture', (req, res) => {
    newFacture.find()
        .then(factures => res.json(factures))
        .catch(err => console.log(err.message))
})
//Route Read One facture By Id
router.get('/facture/:id', (req, res) => {
    newFacture.findById(req.params.id)
        .then(facture => res.json(facture))
        .catch(err => console.log(err.message))
})
//Route Delete facture
router.delete('/deleteFacture/:id', (req, res) => {
    newFacture.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Facture Deleted' }))
        .catch(err => console.log(err.message))
})
//Route  Update  facture
router.put('/updateFacture/:id', (req, res) => {
    newFacture.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newFacture.findById(req.params.id)
            .then(facture => res.json(facture))
            .catch(err => console.log(err.message))
    })
})
module.exports = router