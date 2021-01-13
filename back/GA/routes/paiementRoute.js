const express = require('express');
const router = express.Router();
const newPaiement = require("../modules/paiement")


// Route Create New paiement
router.post('/addPaiement', (req, res) => {
    const { montant, type, avance, isValidate, numFacture, Cheques } = req.body
    const paiementModel = new newPaiement({
        montant,
        type,
        avance,
        isValidate,
        numFacture,
        Cheques
    })
    paiementModel.save()
        .then(paiement => res.json(paiement))
        .catch(err => console.log(err.message))
})

// Route Read paiement
router.get('/Paiement', (req, res) => {
    newPaiement.find()
        .then(paiement => res.json(paiement))
        .catch(err => console.log(err.message))
})


//Route Delete paiement
router.delete('/deletePaiement/:id', (req, res) => {
    newPaiement.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Paiement Deleted' }))
        .catch(err => console.log(err.message))
})
//Route  Update  paiement
router.put('/updatePaiement/:id', (req, res) => {
    newPaiement.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newPaiement.findById(req.params.id)
            .then(paiement => res.json(paiement))
            .catch(err => console.log(err.message))
    })
})
module.exports = router