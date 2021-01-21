const express = require('express');
const router = express.Router();
const newFournissuer = require("../modules/fournisseur")
const authMiddleware = require("../../helpers/authMiddleware")


// Route Create New Fournissuer
// Path : http://localhost:5000/api/addFournisseur
router.post('/addFournisseur', authMiddleware, (req, res) => {
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
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})

// Route Read All fournisseur
// Path : http://localhost:5000/api/allFournisseur
router.get('/allFournisseur', authMiddleware, (req, res) => {
    newFournisseur.find()
        .then(fournisseurs => res.json(fournisseurs))
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})


//Route Delete fournisseur
// Path : http://localhost:5000/api/deleteFournisseur/:id
router.delete('/deleteFournisseur/:id', authMiddleware, (req, res) => {
    newFournisseur.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Fournisseur Deleted' }))
        .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
})
//Route  Update  fournisseur
// Path : http://localhost:5000/api/updateFournisseur
router.put('/updateFournisseur', authMiddleware, (req, res) => {
    const { matricule, numTel, email, adresse } = req.body
    newFournisseur.findByIdAndUpdate(
        id,
        { matricule, numTel, email, adresse },
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newfournisseur.findById(req.params.id)
                .then(fournisseur => res.json(fournisseur))
                .catch(err => res.status(400).json({ errors: [{ msg: err }] }))
        })
})



module.exports = router