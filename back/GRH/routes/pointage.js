const express = require("express");
const router = express.Router();
const newPointage = require("../modules/pointage");
const authMiddleware = require("../../helpers/authMiddleware");

router.post("/pointage",authMiddleware,(req, res) => {
  const { date } = req.body;
  let pointageModel = new newPointage({ date});
  pointageModel
    .save()
    .then((pointage) => res.status(200).json(pointage))
    .catch((err) => res.status(400).json(err));
});
router.get("/pointage",authMiddleware,(req, res) => {
  newPointage.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});

router.delete("/pointage/:id", authMiddleware,(req, res) => {
  const pointageId = req.params.id;
  newPointage
    .findByIdAndDelete(pointageId)
    .then((pointage) => res.status(200).json(pointage))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.put("/pointage/:id",authMiddleware, (req, res) => {
  const pointId = req.params.id;
  const { date } = req.body;
  let pointageModel = new newPointage({ date});
  newPointage
    .findByIdAndUpdate(pointId, { date})
    .then((pointage) => res.status(200).json(pointage))
    .catch((err) => res.status.json({ errors: [{ msg: "server ERROR" }] }));
});
module.exports = router;