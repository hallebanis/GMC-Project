const express = require("express");
const router = express.Router();
const authMiddleware = require("../../helpers/authMiddleware");
const AssignPrime = require("../modules/assignPrime");

router.post("/assignPrime", authMiddleware, (req, res) => {
  const { dateAssign, idPersonnel, idPrime } = req.body;

  const newPrime = new AssignPrime({
    dateAssign,
    idPersonnel,
    idPrime,
  });
  newPrime
    .save()
    .then((prime) => res.status(200).json(prime))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
