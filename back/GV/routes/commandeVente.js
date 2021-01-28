const express = require("express");
const router = express.Router();
const newCommVente = require("../modules/CommandeVente");
const authMiddleware = require("../../helpers/authMiddleware");
const CommandeVente = require("../modules/CommandeVente");
//Route Create Commande Vente
//path: http://localhost:5000/api/AddCommandeVente
router.post("/AddCommandeVente", authMiddleware, (req, res) => {
  const { _id, isValidate, numero, clientId } = req.body;
  let CommandeVenteModel = new newCommVente({
    _id,
    total: 0,
    isValidate,
    numero,
    clientId,
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
    .populate("clientId")
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
    .then((command) => res.status(200).json(command))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

router.put("/validateCommand", authMiddleware, (req, res) => {
  const { id } = req.body;
  CommandeVente.findByIdAndUpdate(id, { isValidate: true })
    .then(() => {
      CommandeVente.findById(id)
        .populate("clientId")
        .then((commande) => res.status(200).json(commande))
        .catch((err) => {
          res.status(400).json({ errors: [{ msg: err }] });
        });
    })
    .catch((err) => {
      res.status(400).json({ errors: [{ msg: err }] });
    });
});

module.exports = router;
