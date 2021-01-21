const express = require("express");
const router = express.Router();
const newCommVente = require("../modules/CommandeVente");
const authMiddleware = require("../../helpers/authMiddleware");
//Route Create Commande Vente
//path: http://localhost:5000/api/AddCommandeVente
router.post("/AddCommandeVente", authMiddleware, (req, res) => {
  const { total, isValidate, numero, clientId} = req.body;
  let CommandeVenteModel = new newCommVente({
    total,
    isValidate,
    numero,
    clientId
  });
  CommandeVenteModel.save()
    .then((commandeVente) => res.status(200).json(commandeVente))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read all Commande Vente
//path: http://localhost:5000/api/CommandesVente
router.get("/CommandesVente", authMiddleware, (req, res) => {
  newCommVente
    .find()
    .then((CommandesVente) => res.json(CommandesVente))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Commande Vente
//path: http://localhost:5000/api/updateCommVente
router.put("/updateCommVente", authMiddleware, (req, res) => {
  const { id, dateCommande, total, isValidate, numero } = req.body;
  newCommVente.findByIdAndUpdate(
    id,
    { dateCommande, total, isValidate, numero },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      newCommVente
        .findById(req.params.id)
        .then((comVente) => res.status(200).json(comVente))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

//Route Delete Commande Vente
//path: http://localhost:5000/api/deleteCommVente/:id
router.delete("/deleteCommVente/:id", authMiddleware, (req, res) => {
  newCommVente
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ msg: "Commande Vente Deleted" }))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
