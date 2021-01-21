const express = require("express");
const router = express.Router();
const newAbsence = require("../modules/absence");
const authMiddleware = require("../../helpers/authMiddleware");
const Personnel = require("../modules/personnel");
const personnel = require("../modules/personnel");

router.post("/absence", authMiddleware, (req, res) => {
  const { idPersonnel, motif } = req.body;
  let absenceModel = new newAbsence({
    idPersonnel,
    motif,
  });
  absenceModel
    .save()
    .then((absence) => {
      personnel
        .findByIdAndUpdate(idPersonnel, { $push: { absence: absence._id } })
        .then(() => {})
        .catch(() => {});
      res.status(200).json(absence);
    })
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});
router.get("/absence", authMiddleware, (req, res) => {
  newAbsence.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    res.status(200).send(doc);
  });
});

router.delete("/absence/:id", authMiddleware, (req, res) => {
  const absenceId = req.params.id;
  newAbsence
    .findByIdAndDelete(absenceId)
    .then((absence) => {
      Personnel.findByIdAndUpdate(absence, {
        $pull: { absence: absence._id },
      })
        .then(() => {})
        .catch(() => {});
      res.status(200).json(absence);
    })
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.put("/absence/:id", authMiddleware, (req, res) => {
  const abId = req.params.id;
  const { dateDepart, dateReprise } = req.body;
  let absenceModel = new newAbsence({ dateDepart, dateReprise });
  newAbsence
    .findByIdAndUpdate(abId, { dateDepart, dateReprise })
    .then(() => {
      newAbsence
        .findById(abId)
        .then((absence) => {
          res.status(200).json(absence);
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
