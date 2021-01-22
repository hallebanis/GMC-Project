const express = require("express");
const router = express.Router();
const newFacture = require("../modules/Facture");
const authMiddleware = require ("../../helpers/authMiddleware");


// Route Create new facture
//path: http://localhost:5000/api/addFactureVente
router.post("/addFactureVente", authMiddleware, (req, res) => {
  const {
    numFacture,
    totalAvantRemise,
    description,
    remise,
    totalApresRemise,
    idClient,
    idCommand,
  } = req.body;
  const factureModel = new newFacture({
    numFacture,
    date,
    totalAvantRemise,
    description,
    remise,
    totalApresRemise,
    type,
    isValidate,
    idFournisseur,
    idClient,
    idCommand,
  });
  factureModel
    .save()
    .then((facture) => res.status(200).json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read All facture
//path: http://localhost:5000/api/allFactureVente
router.get("/allFactureVente", authMiddleware, (req, res) => {
  newFacture
    .find()
    .then((factures) => res.status(200).json(factures))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route  Update  facture
//path: http://localhost:5000/api/updateFactureVente
router.put("/updateFactureVente", authMiddleware, (req, res) => {
  const {
    id,
    numFacture,
    date,
    totalAvantRemise,
    description,
    remise,
    totalApresRemise,
    idFournisseur,
  } = req.body;
  newFacture.findByIdAndUpdate(
    id,
    {
      numFacture,
      date,
      totalAvantRemise,
      description,
      remise,
      totalApresRemise,
      idFournisseur,
    },
    (err, data) => {
      if (err) {
        res.status(400).json({ errors: [{ msg: err }] });
      }
      newFacture
        .findById(id)
        .then((facture) => res.status(200).json(facture))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
    }
  );
});

//Route Delete facture
//path: http://localhost:5000/api/deleteFactureVente/:id
router.delete("/deleteFactureVente/:id", authMiddleware, (req, res) => {
  newFacture
    .findByIdAndDelete(req.params.id)
    .then((facture) => res.status(200).json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});


module.exports = router;
