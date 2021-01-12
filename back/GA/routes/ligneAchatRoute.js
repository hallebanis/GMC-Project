const express = require('express');
const router = express.Router();
const newLigne = require("../modules/ligneAchat")


// Route Create New Ligne
router.post('/addLigne', (req, res) => {
    const { quantite, sousTotal, description, idCommande, idProduit } = req.body
    const ligneModel = new newLigne({
        quantite,
        sousTotal,
        description,
        idCommande,
        idProduit
    })
    ligneModel.save()
        .then(ligne => res.json(ligne))
        .catch(err => console.log(err.message))
})

// Route Read ligne
router.get('/Ligne', (req, res) => {
    newLigne.find()
        .then(ligne => res.json(ligne))
        .catch(err => console.log(err.message))
})


//Route Delete ligne
router.delete('/deleteLigne/:id', (req, res) => {
    newLigne.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Ligne Deleted' }))
        .catch(err => console.log(err.message))
})
//Route  Update  ligne
router.put('/updateligne/:id', (req, res) => {
    newLigne.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newLigne.findById(req.params.id)
            .then(ligne => res.json(ligne))
            .catch(err => console.log(err.message))
    })
})
module.exports = router