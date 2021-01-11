const express = require("express");
const router = express.Router();
const newAbsence = require("../modules/absence");
const authMiddleware = require("../../helpers/authMiddleware");

router.post("/absence", authMiddleware,(req, res) => {
  const { dateDepart, dateReprise } = req.body;
  let absenceModel = new newAbsence({ dateDepart, dateReprise });
  absenceModel
    .save()
    .then((absence) => res.status(200).json(absence))
    .catch((err) => res.status(400).json(err));
});
router.get("/absence", authMiddleware,(req, res) => {
  newAbsence.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});

router.delete("/absence/:id",authMiddleware, (req, res) => {
  const absenceId = req.params.id;
  newAbsence
    .findByIdAndDelete(absenceId)
    .then((absence) => res.status(200).json(absence))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.put("/absence/:id",authMiddleware, (req, res) => {
  const abId = req.params.id;
  const { dateDepart, dateReprise } = req.body;
  let absenceModel = new newAbsence({ dateDepart, dateReprise });
  newAbsence
    .findByIdAndUpdate(abId, { dateDepart, dateReprise })
    .then((absence) => res.status(200).json(absence))
    .catch((err) => res.status.json({ errors: [{ msg: "server ERROR" }] }));
});
module.exports = router;
