const express = require("express");
const router = express.Router();
const newCommande = require("../modules/commandeAchat");
const authMiddleware = require("../../helpers/authMiddleware");

// Route Create New commande
// Path : http://localhost:5000/api/addCommande
router.post("/addCommande", authMiddleware, (req, res) => {
  const { total, isValidate, numero, idFournisseur } = req.body;
  const commandeModel = new newCommande({
    total,
    isValidate,
    numero,
    idFournisseur,
  });
  commandeModel
    .save()
    .then((commande) => res.status(200).json(commande))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
// Route Read All commande
// Path : http://localhost:5000/api/allCommande
router.get("/allCommande", authMiddleware, (req, res) => {
  newCommande
    .find()
    .populate("idFournisseur")
    .then((commandes) => res.status(200).json(commandes))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Delete commande
// Path : http://localhost:5000/api/deleteCommande/:id
router.delete("/deleteCommande/:id", authMiddleware, (req, res) => {
  newCommande
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ msg: "Commande Deleted" }))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route  Update  commande
// Path : http://localhost:5000/api/updateCommande
router.put("/updateCommande", authMiddleware, (req, res) => {
  const { id, date, total, isValidate, numero } = req.body;
  newCommande.findByIdAndUpdate(
    id,
    { date, total, isValidate, numero },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      newCommande
        .findById(req.params.id)
        .then((commande) => res.status(200).json(commande))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

module.exports = router;
