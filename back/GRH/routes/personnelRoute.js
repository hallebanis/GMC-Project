const express = require("express");
const personnel = require("../modules/personnel");
const router = express.Router();

router.post("/personnel", (req, res) => {
  const newPers = new personnel(req.body);
  newPers
    .save()
    .then((pers) => res.status(200).json(pers))
    .catch((err) => res.status(400).json(err));
});

router.post("/personnel/addpersonnel", (req, res) => {});

module.exports = router;
