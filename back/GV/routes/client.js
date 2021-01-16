const express = require("express");
const router = express.Router();
const newClient = require("../modules/Client");

//Route Create a client
//path: http://localhost:5000/api/AddClient
router.post("/AddClient", (req, res) => {
  const { nom, prenom, adresse, civilite, email, tel, commandesID } = req.body;
  let clientModel = new newClient({
    nom,
    prenom,
    adresse,
    civilite,
    email,
    tel,
    commandesID,
  });
  clientModel
    .save()
    .then((client) => res.status(200).json(client))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read all client
//path: http://localhost:5000/api/clients
router.get("/clients", (req, res) => {
  newClient
    .find()
    .then((clients) => res.status(200).json(clients))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Client
//path: http://localhost:5000/api/updateClient/:id
router.put("/updateClient/:id", (req, res) => {
  newClient.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    (err, data) => {
      if (err) {
        throw err;
      }
      newClient
        .findById(req.params.id)
        .then((client) => res.status(200).json(client))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

//Route Delete Client
//path: http://localhost:5000/api/deleteClient/:id
router.delete("/deleteClient/:id", (req, res) => {
  newClient
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ msg: "Client Deleted" }))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
