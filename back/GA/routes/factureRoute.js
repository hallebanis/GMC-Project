const express = require("express");
const router = express.Router();
const newFacture = require("../modules/facture");
const authMiddleware= require("../../helpers/authMiddleware")

// Route Create New facture
// Path : http://localhost:5000/api/addFacture
router.post("/addFacture",authMiddleware, (req, res) => {
  const {
    numFacture,
    totalAvantRemise,
    description,
    remise,
    totalApresRemise,
    idFournisseur,
    idCommand,
  } = req.body;
  const factureModel = new newFacture({
    numFacture,
    totalAvantRemise,
    description,
    remise,
    totalApresRemise,
    idFournisseur,
    idCommand,
  });
  factureModel
    .save()
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

// Route Read All facture
// Path : http://localhost:5000/api/allFacture
router.get("/allFacture",authMiddleware, (req, res) => {
  newFacture
    .find()
    .then((factures) => res.status(200).json(factures))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Delete facture
// Path : http://localhost:5000/api/deleteFacture/:id
router.delete("/deleteFacture/:id",authMiddleware, (req, res) => {
  newFacture
    .findByIdAndDelete(req.params.id)
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route  Update  facture
// Path : http://localhost:5000/api/updateFacture
router.put("/updateFacture",authMiddleware, (req, res) => {
  const {
    id,
    numFacture,
    date,
    isValidate,
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
      isValidate,
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
module.exports = router;
