const express = require('express')
const router = express.Router();
const newClient = require('../modules/Client');

//Route Create a client
router.post("/AddClient", (req, res) => {
    const { nom, prenom, adresse, civilite, email, tel, commandesID } = req.body
    let clientModel = new newClient({
        nom,
        prenom,
        adresse,
        civilite,
        email,
        tel,
        commandesID
    });
    clientModel
        .save()
        .then((client) => res.status(200).json(client))
        .catch((err) => res.status(400).json(err));
});

//Route Read all client
router.get("/clients", (req, res) => {
    newClient.find()
        .then(clients => res.json(clients))
        .catch(err => console.log(err.message))
});

//Route Update Client
router.put('/updateClient/:id', (req,res) =>{
    newClient.findByIdAndUpdate(req.params.id, {$set: {...req.body}},(err, data) =>{
        if (err) {throw err}
        newClient.findById(req.params.id)
        .then(client => res.json (client))
        .catch(err => console.log(err.message))
    })
});

//Route Delete Client
router.delete('/deleteClient/:id' , (req,res) =>{
    newClient.findByIdAndDelete(req.params.id)
    .then (() => res.json ({msg: 'Client Deleted'}))
    .catch(err => console.log(err.message))
});

module.exports = router;