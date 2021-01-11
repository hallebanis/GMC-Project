const express = require("express");
const router = express.Router();
const newMotifsAbsence = require("../modules/motifsAbsence");
const authMiddleware = require("../../helpers/authMiddleware");

router.post("/motifs",authMiddleware, (req, res) => {
  const { description } = req.body;
  let motifsModel = new newMotifsAbsence({ description });
  motifsModel
    .save()
    .then((absence) => res.status(200).json(absence))
    .catch((err) => res.status(400).json(err));
});
router.get("/motifs",authMiddleware, (req, res) => {
  newMotifsAbsence.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});


module.exports = router;
