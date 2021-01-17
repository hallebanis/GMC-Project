const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const Utilisateur = require("../modules/utlisateur");
const Demande = require("../../GRH/modules/demande");

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

router.post(":id/demande", authMiddleware, (req, res) => {
  const { sujet, description } = req.body;
  const dateEnvoie = Date.now();
  const etat = "envoyée";
  const peronnelId = req.params.id;
  const demande = new Demande({
    sujet,
    description,
    personnelId,
    etat,
    dateEnvoie,
  });
  demande.save().then((demande) => {
    res.status(200).json(demande);
  });
});
module.exports = router;
