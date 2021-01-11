const express = require('express')
const router = express.Router();
const newCommVente = require('../modules/CommandeVente');

//Route Create Commande Vente
router.post("/AddCommandeVente", (req, res) => {
    const { date, total, isValidate, numero, id_client, id_ligneVente, id_entreprise } = req.body
    let CommandeVenteModel = new newCommVente({
        date,
        total,
        isValidate,
        numero,
        id_client,
        id_ligneVente,
        id_entreprise
    });
    CommandeVenteModel
        .save()
        .then((commandeVente) => res.status(200).json(commandeVente))
        .catch((err) => res.status(400).json(err));
});

//Route Read all Commande Vente
router.get("/CommandesVente", (req, res) => {
    newCommVente.find()
        .then(CommandesVente => res.json(CommandesVente))
        .catch(err => console.log(err.message))
});

//Route Update Commande Vente
router.put('/updateCommVente/:id', (req,res) =>{
    newCommVente.findByIdAndUpdate(req.params.id, {$set: {...req.body}},(err, data) =>{
        if (err) {throw err}
        newCommVente.findById(req.params.id)
        .then(client => res.json (client))
        .catch(err => console.log(err.message))
    })
});

//Route Delete Commande Vente
router.delete('/deleteCommVente/:id' , (req,res) =>{
    newCommVente.findByIdAndDelete(req.params.id)
    .then (() => res.json ({msg: 'Commande Vente Deleted'}))
    .catch(err => console.log(err.message))

});

module.exports = router;