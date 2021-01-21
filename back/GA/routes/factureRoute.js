const express = require("express");
const router = express.Router();
const newFacture = require("../modules/facture");

// Route Create New facture
router.post("/addFacture", (req, res) => {
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
router.get("/allFacture", (req, res) => {
  newFacture
    .find()
    .then((factures) => res.status(200).json(factures))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
//Route Read One facture By Id
router.get("/facture/:id", (req, res) => {
  newFacture
    .findById(req.params.id)
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
//Route Delete facture
router.delete("/deleteFacture/:id", (req, res) => {
  newFacture
    .findByIdAndDelete(req.params.id)
    .then((facture) => res.json(facture))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
//Route  Update  facture
router.put("/updateFacture", (req, res) => {
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
