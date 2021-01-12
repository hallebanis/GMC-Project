const express = require('express');
const router = express.Router();
const newCompte = require("../modules/compteBanquaire")


// Route creat new compte
router.post('/compteBancaire', (req, res) => {
    const { RIB, banque, agence, } = req.body
    const compteModel = new newCompte({
        RIB,
        banque,
        agence,
    })
    compteModel.save()
        .then(compte => res.json(compte))
        .catch(err => console.log(err.message))
})


// Route Read new Compte
router.get('/Compte', (req, res) => {
    newCompte.find()
        .then(compte => res.json(compte))
        .catch(err => console.log(err.message))
})

// Route Delete Compte
router.delete('/deleteCompte', (req, res) => {
    newCompte.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Compte deleted' }))
        .catch(err => console.log(err.message))
})

//Route Update Compte
router.put('/updateCompte/:id', (req, res) => {
    newCompte.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newCompte.findById(req.params.id)
            .then(compte => res.json(compte))
            .catch(err => console.log(err.message))
    })
})
module.exports = router

