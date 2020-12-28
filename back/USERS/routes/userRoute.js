const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const Utilisateur = require("../modules/utlisateur");

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  Utilisateur.findById(req.userId)
    .populate("role")
    .populate("personnelId")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(400).json({ errors: [{ msg: "server error" }] });
    });
});

module.exports = router;
