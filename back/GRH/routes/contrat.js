const express = require("express");
const router = express.Router();
const newContrat = require("../modules/contrat");
const authMiddleware = require("../../helpers/authMiddleware");
const Personnel = require("../modules/personnel");

router.post("/contrat", authMiddleware, (req, res) => {
  const {
    dateFin,
    dateDebut,
    salaireDeBase,
    typeContrat,
    idPersonnel,
  } = req.body;
  let contratModel = new newContrat({
    dateDebut,
    dateFin,
    salaireDeBase,
    typeContrat,
    idPersonnel,
  });
  contratModel
    .save()
    .then((contr) => {
      Personnel.findByIdAndUpdate(idPersonnel, {
        $push: { contrat: contr._id },
      })
        .then(() => {})
        .catch(() => {});
      res.status(200).json(contr);
    })
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

router.get("/contrat", authMiddleware, (req, res) => {
  newContrat.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});

router.delete("/contrat/:id", authMiddleware, (req, res) => {
  const contId = req.params.id;
  newContrat
    .findByIdAndDelete(contId)
    .then((contrat) => res.status(200).json(contrat))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.put("/contrat/:id", authMiddleware, (req, res) => {
  const contratId = req.params.id;
  const { dateDebut, dateFin, salaireDeBase, typeContrat } = req.body;
  let contratModel = new newContrat({
    dateDebut,
    dateFin,
    salaireDeBase,
    typeContrat,
  });
  newContrat
    .findOneAndUpdate(contratId, {
      dateDebut,
      dateFin,
      salaireDeBase,
      typeContrat,
    })
    .then(() => {
      newContrat
        .findById(contratId)
        .then((contrat) => {
          res.status(200).json(contrat);
        })
        .catch((err) =>
          res.status(400).json({ errors: [{ msg: "server ERROR" }] })
        );
    })
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});
module.exports = router;
