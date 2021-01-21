const express = require('express');
const router = express.Router();
const newCompte = require("../modules/compteBanquaire")
const authMiddleware = require("../../helpers/authMiddleware")


// Route creat new compte
// Path : http://localhost:5000/api/compteBancaire
router.post('/compteBancaire', authMiddleware, (req, res) => {
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
// Path : http://localhost:5000/api/Compte
router.get('/Compte', authMiddleware, (req, res) => {
    newCompte.find()
        .then(compte => res.json(compte))
        .catch(err => console.log(err.message))
})

// Route Delete Compte
// Path : http://localhost:5000/api/deleteCompte/:id
router.delete('/deleteCompte/:id', authMiddleware, (req, res) => {
    newCompte.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Compte deleted' }))
        .catch(err => console.log(err.message))
})

//Route Update Compte
// Path : http://localhost:5000/api/updateCompte
router.put('/updateCompte', authMiddleware, (req, res) => {
    const { RIB, banque, agence } = req.body;
    newCompte.findByIdAndUpdate(
        id,
        { RIB, banque, agence },
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newCompte.findById(req.params.id)
                .then(compte => res.json(compte))
                .catch(err => console.log(err.message))
        })
})



module.exports = router

