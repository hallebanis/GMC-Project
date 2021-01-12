const express = require('express');
const router = express.Router();
const newCommande = require("../modules/commandeAchat")


// Route Create New commande
router.post('/addCommande', (req, res) => {
    const { date, total, isValidate, numero, idFournisseur } = req.body
    const commandeModel = new newCommande({
        date,
        total,
        isValidate,
        numero,
        idFournisseur
    })
    commandeModel.save()
        .then(commande => res.json(commande))
        .catch(err => console.log(err.message))
})
// Route Read All commande
router.get('/allCommande', (req, res) => {
    newCommande.find()
        .then(commandes => res.json(commandes))
        .catch(err => console.log(err.message))
})
//Route Read One commande By Id
router.get('/Commande/:id', (req, res) => {
    newCommande.findById(req.params.id)
        .then(commande => res.json(commande))
        .catch(err => console.log(err.message))
})
//Route Delete commande
router.delete('/deleteCommande/:id', (req, res) => {
    newCommande.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: 'Commande Deleted' }))
        .catch(err => console.log(err.message))
})
//Route  Update  commande
router.put('/updateCommande/:id', (req, res) => {
    newCommande.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err, data) => {
        if (err) { throw err }
        newCommande.findById(req.params.id)
            .then(commande => res.json(commande))
            .catch(err => console.log(err.message))
    })
})
module.exports = router