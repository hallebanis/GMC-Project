const express = require('express');
const router = express.Router();
const newPaiement = require("../modules/paiement")
const authMiddleware = require("../../helpers/authMiddleware")

// Route Create New paiement
// Path : http://localhost:5000/api/addPaiement
router.post('/addPaiement', authMiddleware, (req, res) => {
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
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})

// Route Read paiement
// Path : http://localhost:5000/api/Paiement
router.get('/Paiement', authMiddleware, (req, res) => {
    newPaiement.find()
        .then(paiement => res.json(paiement))
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})


//Route Delete paiement
// Path : http://localhost:5000/api/deletePaiement/:id
router.delete('/deletePaiement/:id', authMiddleware, (req, res) => {
    newPaiement.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Paiement Deleted' }))
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})
//Route  Update  paiement
// Path : http://localhost:5000/api/updatePaiement

router.put('/updatePaiement', authMiddleware, (req, res) => {
    const { montant, type, avance } = req.body;
    newPaiement.findByIdAndUpdate(
        id,
        { montant, type, avance },
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newPaiement.findById(req.params.id)
                .then(paiement => res.json(paiement))
                .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
        })
})


module.exports = router