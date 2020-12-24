const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const Utilisateur = require("../modules/utlisateur");

const router = express.Router();

router.get("/:id", authMiddleware, (req, res) => {
  Utilisateur.findById(req.params.id)
    .populate("roles")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(400).json({ errors: [{ msg: "server error" }] });
    });
});
