const express = require('express');
const router = express.Router();
const newCheque = require("../modules/cheque")


// Route Create New cheque
router.post('/addCheque', (req, res) => {
    const { numero, montant, echeance, idCompte, idPaiement } = req.body
    const chequeModel = new newCheque({
        numero,
        montant,
        echeance,
        idCompte,
        idPaiement
    })
    chequeModel.save()
        .then(cheque => res.json(cheque))
        .catch(err => console.log(err.message))
})
// Route Read All cheque
router.get('/allCheque', (req, res) => {
    newCheque.find()
        .then(cheques => res.json(cheques))
        .catch(err => console.log(err.message))
})
//Route Read One cheque By Id
router.get('/cheque/:id', (req, res) => {
    newCheque.findById(req.params.id)
        .then(cheque => res.json(cheque))
        .catch(err => console.log(err.message))
})
//Route Delete cheque
router.delete('/deleteCheque/:id', (req, res) => {
    newCheque.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Cheque Deleted' }))
        .catch(err => console.log(err.message))
})
//Route  Update  cheque
router.put('/updateCheque/:id', (req, res) => {
    newCheque.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newCheque.findById(req.params.id)
            .then(cheque => res.json(cheque))
            .catch(err => console.log(err.message))
    })
})
module.exports = router